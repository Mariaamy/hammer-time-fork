import axios from 'axios';
import hAPI from './hAPI';

export default class AxiosHandler {
    axiosInstance;

    // If we ever refresh the page, we still have the refresh token in a httpOnly cookie on the /refresh endpoint
    #accessToken = "";

    constructor() {
        if(process.env.NODE_ENV === "production") {
            this.axiosInstance = axios.create({
                withCredentials: true,
                baseURL: process.env.REACT_APP_API_URL
            })
        } else {
            this.axiosInstance = axios.create({
                withCredentials: true
            });
        }

        // Add middleware to the Axios instance
        this.axiosInstance.interceptors.request.use(this.appendToken, (error) => error);
        this.axiosInstance.interceptors.response.use(this.responseHandler, this.errorHandler);
    }

    isAuthenticated = () => {
        return this.getToken() !== "" ? true : false;
    }

    getToken = () => {
        if(this.#accessToken)
            return this.#accessToken;
        else
            return localStorage.getItem("token") ? localStorage.getItem("token") : "";
    }

    setToken = async (token) => {
        localStorage.setItem("token", token);
        this.#accessToken = token;
    }

    // Axios Middleware
    appendToken = async (config) => {
        const user = localStorage.getItem('user');
        if(user) {
            config.headers.Authorization = `Bearer ${this.getToken()}`;
        }

        return config;
    }

    responseHandler = async (response) => {
        const data = response?.data;
        return data ? data : Promise.reject(response);
    }

    errorHandler = async (error) => {
        if(error.response) {
            const { data } = error.response; // status, ...response {data { data.error, data.message, ...etc}}

            // Check if we SHOULD be logged in
            const user = localStorage.getItem('user');
            if(user) {
                // Check if our current access token is invalid (not missing)
                if(data.error === "invalid-access-token") {
                    await hAPI.refreshToken();

                    // retry
                    const newConfig = await this.appendToken(error.config);
                    return this.axiosInstance.request(newConfig);
                } else if(data.error === "invalid-refresh-token" || data.error === "unknown-refresh-token") {
                    window.location.href = "/logout"; // Redirect to logout page
                }
            }

            return Promise.reject(data);
        } else {
            return Promise.reject(error);
        }
    }
}