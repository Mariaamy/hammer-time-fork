import AxiosHandler from "./axios";

// Import extensions
import { extendAPIGeneric } from "./endpoints/generic";
import { extendAPIUsers } from "./endpoints/users";
import { extendAPITools } from "./endpoints/tools";

// Event emitter to prevent spam while token is refreshing
import { EventEmitter } from "events";
export default class hAPI {
  static #APIPrefix = "/api";
  static get APIPrefix() {
    return this.#APIPrefix;
  }

  static #AxiosHandlerInstance = null;
  static get Axios() {
    return this.#AxiosHandlerInstance?.axiosInstance;
  }

  // Stop token from being refreshed in parallel
  static #refreshingEvent = new EventEmitter();
  static #isRefreshing = false; // true when refreshing token

  static get isAuthenticated() {
    return this.#AxiosHandlerInstance.isAuthenticated();
  }

  static init() {
    if (!this.#AxiosHandlerInstance) {
      this.#AxiosHandlerInstance = new AxiosHandler();
    }
  }

  static getURL() {
    return process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL
      : "http://localhost:5000"; // Hardcoding for now 🤷
  }

  static async login(email, password) {
    try {
      const response = await this.Axios.post(`/auth/login`, {
        email,
        password,
      });
      const accessToken = response.data.accessToken;
      this.#AxiosHandlerInstance?.setToken(accessToken);
      return { name: response.data.name, accessToken };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async refreshToken() {
    if (this.#isRefreshing) {
      // Wait for previous refresh event to finish
      await new Promise((res, rej) =>
        this.#refreshingEvent.once("refreshed", () => {
          res(true);
        })
      );
      return true;
    }

    try {
      // Stop multiple refreshes
      this.#isRefreshing = true;
      const response = await this.Axios.get(
        `/auth/refresh?response_type=token`
      );
      const accessToken = response.data.accessToken;
      this.#AxiosHandlerInstance?.setToken(accessToken);
      this.#isRefreshing = false;
      this.#refreshingEvent.emit("refreshed");

      return true;
    } catch (error) {
      this.#isRefreshing = false;
      this.#refreshingEvent.emit("refreshed");
      return Promise.reject(error);
    }
  }
}

// Add extensions
extendAPIGeneric();
extendAPIUsers();
extendAPITools();
