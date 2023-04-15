import hAPI from "../hAPI";

class Generic {
  /**
   * Retrieves data to manage/display.
   *
   * @param {string} dataType - Name for the type of data we want to retrieve. Ex. "users" would return all users data.
   * @returns {object} Returns a promise resolving into repsonse data retrieved from querying database, or the corresponding error.
   */
  static async retrieveManageData(dataType) {
    try {
      const response = await hAPI.Axios.get(`${hAPI.APIPrefix}/${dataType}`);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * Retrieves data to edit.
   *
   * @param {string} dataType - Name for the type of data we want to edit. Ex. "users" would return data for one specific user.
   * @param {string} id - A 24 characters ID of a data entry.
   * @returns {object} Returns a promise resolving into repsonse data retrieved from querying database, or the corresponding error.
   */
  static async retrieveEditingData(dataType, id) {
    try {
      const response = await hAPI.Axios.get(
        `${hAPI.APIPrefix}/${dataType}/${id}`
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * Creates new data.
   *
   * @param {object} payloadObject - Contains the data payload.
   * @param {string} dataType - Name for the type of data we want to create. Ex. "users" would create new data for one specific user.
   * @returns {object} Returns a promise resolving into repsonse data retrieved from querying database, or the corresponding error.
   */
  static async createManageData(payloadObject, dataType) {
    try {
      const response = await hAPI.Axios.post(
        `${hAPI.APIPrefix}/${dataType}`,
        payloadObject
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * Updates existing data.
   *
   * @param {object} payloadObject - Contains the data payload.
   * @param {string} dataType - Name for the type of data we want to update. Ex. "users" would update data for one specific user.
   * @param {string} id - A 24 characters ID of a data entry.
   * @returns {object} Returns a promise resolving into repsonse data retrieved from querying database, or the corresponding error.
   */
  static async updateManageData(payloadObject, dataType, id) {
    try {
      const response = await hAPI.Axios.put(
        `${hAPI.APIPrefix}/${dataType}/${id}`,
        payloadObject
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * Delete existing data.
   *
   * @param {string} dataType - Name for the type of data we want to delete. Ex. "users" would delete data for one specific user.
   * @param {string} id - A 24 characters ID of a data entry.
   * @returns {object} Returns a promise resolving into repsonse data retrieved from querying database, or the corresponding error.
   */
  static async deleteManageData(dataType, id) {
    try {
      const response = await hAPI.Axios.delete(
        `${hAPI.APIPrefix}/${dataType}/${id}`
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export function extendAPIGeneric() {
  Object.assign(hAPI, { generic: Generic });
}