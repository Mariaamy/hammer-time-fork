import hAPI from "../hAPI";

class Tools {
  static async getTools() {
    try {
      const response = await hAPI.Axios.get(`${hAPI.APIPrefix}/tools`);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getTool(toolID) {
    try {
      const response = await hAPI.Axios.get(`${hAPI.APIPrefix}/tools/${toolID}`);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export function extendAPITools() {
  Object.assign(hAPI, { tools: Tools });
}
