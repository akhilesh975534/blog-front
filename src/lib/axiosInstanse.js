import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;
console.log(baseUrl, "++++++++++++++");

const axiosInstense = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: function (data, headers) {
    const access_token = sessionStorage.getItem("token");
    if (access_token) {
      headers.Authorization = "Bearer " + access_token;
    }
    return JSON.stringify(data);
  },
  validateStatus: function (status) {
    if (window.location.pathname !== "/login") {
      if (status === 401) {
        window.location.assign("/login");
      }
      if (status === 404) {
        console.log("400 error");
      }
    }
    return status >= 200 && status <= 204;
  },
});

export default axiosInstense;
