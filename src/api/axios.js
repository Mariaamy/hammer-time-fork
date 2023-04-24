import axios from "axios";
import hAPI from "./hAPI";

export default class AxiosHandler {
  axiosInstance;
  #accessToken = "";

  constructor() {
    if (process.env.NODE_ENV === "production") {
      this.axiosInstance = axios.create({
        withCredentials: true,
        baseURL: process.env.REACT_APP_API_URL,
      });
    } else {
      this.axiosInstance = axios.create({
        withCredentials: true,
      });
    }

    this.axiosInstance.interceptors.request.use(
      this.appendToken,
      (error) => error
    );
    this.axiosInstance.interceptors.response.use(
      this.responseHandler,
      this.errorHandler
    );
  }

  isAuthenticated = () => {
    return Boolean(this.getToken());
  };

  getToken() {
    if (!this.#accessToken) {
      this.#accessToken = localStorage.getItem("token") || "";
    }
    return this.#accessToken;
  }

  setToken = async (token) => {
    localStorage.setItem("token", token);
    this.#accessToken = token;
  };

  appendToken = async (config) => {
    const user = localStorage.getItem("user");
    if (user) {
      config.headers.Authorization = `Bearer ${this.getToken()}`;
    }

    return config;
  };

  responseHandler = async (response) => {
    const data = response?.data;
    return data ? data : Promise.reject(response);
  };

  errorHandler = async (error) => {
    if (error.response) {
      const { data } = error.response;

      const user = localStorage.getItem("user");
      if (!user) {
        return Promise.reject(data);
      }

      if (data.error?.code === "invalid-access-token") {
        await hAPI.refreshToken();

        // retry the request
        const newConfig = await this.appendToken(error.config);
        return this.axiosInstance.request(newConfig);
      } else if (
        data.error?.code === "invalid-refresh-token" ||
        data.error?.code === "unknown-refresh-token"
      ) {
        window.location.href = "/logout";
      }
    } else {
      return Promise.reject(error);
    }
  };
}
