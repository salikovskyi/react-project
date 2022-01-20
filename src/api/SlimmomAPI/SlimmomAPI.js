import axios from "axios";

class SlimmomAPI {
  static axiosInstance = axios.create({
    baseURL: "https://slimmom-backend.goit.global",
  });

  static refreshUser(sid) {
    return this.axiosInstance.post("/auth/refresh", { sid: sid.toString() });
  }

  static setToken(token) {
    this.axiosInstance.defaults.headers.common.Authorization = token;
  }

  static usetToken() {
    this.axiosInstance.defaults.headers.common.Authorization = null;
  }

  static getUserInfo() {
    return this.axiosInstance.get("/user");
  }
  static registerUser(data) {
    return this.axiosInstance.post("/auth/register", data);
  }

  static loginUser(data) {
    return this.axiosInstance.post("/auth/login", data);
  }

  static logoutUser() {
    return this.axiosInstance.post("/auth/logout");
  }
}

export default SlimmomAPI;
