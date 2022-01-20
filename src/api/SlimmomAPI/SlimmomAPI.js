import axios from "axios";

class SlimmomAPI {
  static axiosInstance = axios.create({
    baseURL: "https://slimmom-backend.goit.global",
  });

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

  static getDailyRateInfo(request) {
    return this.axiosInstance.post("/daily-rate", request);
  }

  static postGetUserDaily(id, request) {
    return this.axiosInstance.post(`/daily-rate/${id}`, request);
  }

  static getProduct(search) {
    this.axiosInstance.defaults.params = { search };
    return this.axiosInstance.get("/product");
  }

  static postEatenProduct(product) {
    return this.axiosInstance.post("/day", product);
  }

  static deleteEatenProduct(product) {
    return this.axiosInstance.delete("/day", product);
  }

  static getDayInfo(date) {
    return this.axiosInstance.post("/day/info", date);
  }
}

export default SlimmomAPI;
