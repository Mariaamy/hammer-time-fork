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

  static async updateTool(
    name,
    information,
    availability,
    requiredcourses,
    location,
    image,
    id
  ) {
    try {
      const response = await hAPI.Axios.put(`${hAPI.APIPrefix}/tools/${id}`, {
        name,
        information,
        availability,
        requiredcourses,
        location,
        image,
      });
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

  static async getBookings() {
    try {
      const response = await hAPI.Axios.get(`${hAPI.APIPrefix}/bookings`);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async deleteBooking(bookingID) {
    try {
      const response = await hAPI.Axios.delete(
        `${hAPI.APIPrefix}/bookings/${bookingID}`
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async reportTool(toolID, information, image) {
    try {
      const formData = new FormData();
      formData.append("information", information);
      formData.append("image", image);
      const response = await hAPI.Axios.post(
        `${hAPI.APIPrefix}/reports/${toolID}/report`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getReports() {
    try {
      const response = await hAPI.Axios.get(`${hAPI.APIPrefix}/reports`);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async deleteReport(reportID) {
    try {
      const response = await hAPI.Axios.delete(
        `${hAPI.APIPrefix}/reports/${reportID}`
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async markBroken(toolID, broken) {
    try {
      const response = await hAPI.Axios.put(
        `${hAPI.APIPrefix}/tools/${toolID}`,
        {
          broken,
        }
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async markFixed(toolID, broken) {
    try {
      const response = await hAPI.Axios.put(
        `${hAPI.APIPrefix}/tools/${toolID}`,
        {
          broken,
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
        `${hAPI.APIPrefix}/tools/${toolID}`
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async createTool(
    name,
    information,
    location,
    availability,
    requiredcourses,
    image
  ) {
    try {
      const response = await hAPI.Axios.post(`${hAPI.APIPrefix}/tools`, {
        name,
        information,
        location,
        availability,
        requiredcourses,
        image,
      });
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export function extendAPITools() {
  Object.assign(hAPI, { tools: Tools });
}
