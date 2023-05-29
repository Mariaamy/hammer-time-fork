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

  static async getCurrentUser() {
    try {
      const response = await hAPI.Axios.get(`${hAPI.APIPrefix}/users/`);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getUser(userID) {
    try {
      const response = await hAPI.Axios.get(
        `${hAPI.APIPrefix}/users/${userID}`
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async createUser(name, surname, email, password, courses) {
    try {
     const response = await hAPI.Axios.post(
       `${hAPI.APIPrefix}/users`,
       {
         name,
         surname,
         email,
         password,
         courses
       }
     );
     return response;
   } catch (error) {
     return Promise.reject(error);
   }
 }

 static async updateUser(name, surname, courses, id) {
  try {
    const response = await hAPI.Axios.put(
      `${hAPI.APIPrefix}/users/${id}`,
      {
        name,
        surname,
        courses,
      }
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

}

export function extendAPIUsers() {
  Object.assign(hAPI, { users: Users });
}
