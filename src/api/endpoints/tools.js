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
      const response = await hAPI.Axios.get(
        `${hAPI.APIPrefix}/tools/${toolID}`
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async bookTool(toolID, startTime, endTime) {
    try {
      const response = await hAPI.Axios.post(
        `${hAPI.APIPrefix}/tools/${toolID}/book`,
        {
          startTime,
          endTime,
        }
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async reportTool(toolID, information, image) {
    try {
      const response = await hAPI.Axios.post(
        `${hAPI.APIPrefix}/tools/${toolID}/report`,
        {
          information,
          image
        }
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export function extendAPITools() {
  Object.assign(hAPI, { tools: Tools });
}
