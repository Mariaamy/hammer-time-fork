import hAPI from "../hAPI";

class Users {
  /**
   * Retrieves all users.
   *
   * @returns {object} Returns a promise resolving into repsonse data retrieved from querying database, or the corresponding error.
   */
  static async getUsers() {
    try {
      const response = await hAPI.Axios.get(`${hAPI.APIPrefix}/users`);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export function extendAPIUsers() {
  Object.assign(hAPI, { users: Users });
}
