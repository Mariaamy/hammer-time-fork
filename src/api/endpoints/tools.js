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

  static async getBookings(toolID) {
    try {
      const response = await hAPI.Axios.get(
        `${hAPI.APIPrefix}/bookings/${toolID}`
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
          image,
        }
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async markBroken(toolID, broken) {
    try {
      const response = await hAPI.Axios.patch(
        `${hAPI.APIPrefix}/tools/${toolID}`,
        {
          broken
        }
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async markFixed(toolID, broken) {
    try {
      const response = await hAPI.Axios.patch(
        `${hAPI.APIPrefix}/tools/${toolID}`,
        {
          broken
        }
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async deleteTool(toolID) {
    try {
      const response = await hAPI.Axios.delete(
        `${hAPI.APIPrefix}/tools/${toolID}/delete`
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async createTool(name, information, availability, requiredcourses, image) {
     try {
      const response = await hAPI.Axios.post(
        `${hAPI.APIPrefix}/tools`,
        {
          name,
          information,
          availability,
          requiredcourses,
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
