import AxiosHandler from "./axios";

// Import all class extensions
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

  // Add events to prevent refresh token from being refreshed multiple times (race condition)
  static #refreshingEvent = new EventEmitter();
  static #isRefreshing = false; // This is true while refresh token is being refreshed

  static get isAuthenticated() {
    return this.#AxiosHandlerInstance.isAuthenticated();
  }

  static init() {
    if (!this.#AxiosHandlerInstance) {
      // Init new instance, only if it doesn't already exist
      this.#AxiosHandlerInstance = new AxiosHandler();
    }
  }

  static async login(email, password) {
    try {
      const response = await this.Axios.post(`/auth/login`, {
        email,
        password,
      });
      const accessToken = response.data.accessToken;

      // Update Axios' access token
      this.#AxiosHandlerInstance?.setToken(accessToken);

      // Return
      return { name: response.data.name, accessToken };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Refresh token
  static async refreshToken() {
    if (this.#isRefreshing) {
      // If token is already refreshing, return a promise waiting for the #refreshingEvent - 'refreshed' to be emitted
      await new Promise((res, rej) =>
        this.#refreshingEvent.once("refreshed", () => {
          res(true);
        })
      );

      // Once lock is done, we reach this point where we
      // need to return something, as Axios is awaiting this function
      // to send a new authenticated request
      return true;
    }

    try {
      // Lock the refreshing function to this instance only
      this.#isRefreshing = true;

      // Open a GET request to refresh tokens (refresh token is automatically provided to only /refresh endpoint in httpOnly cookie)
      const response = await this.Axios.get(`/refresh?response_type=token`);

      // Retrieve new access token from response and set Axios' current access token
      const accessToken = response.data.accessToken;
      this.#AxiosHandlerInstance?.setToken(accessToken);

      // Reset isRefreshing status & send refreshed event
      this.#isRefreshing = false;
      this.#refreshingEvent.emit("refreshed");

      // Need to return something, as Axios is awaiting this function
      return true;
    } catch (error) {
      // Reset isRefreshing status & send refreshed event
      this.#isRefreshing = false;
      this.#refreshingEvent.emit("refreshed");
      return Promise.reject(error);
    }
  }
}

// Add class extensions
extendAPIGeneric();
extendAPIUsers();
extendAPITools();
