import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;
console.log(baseUrl, "++++++++++++++");

const axiosInstense = axios.create({
  baseURL: baseUrl,
  transformRequest: function (data, headers) {
    const access_token = sessionStorage.getItem("token");
    if (access_token) {
      headers.Authorization = "Bearer " + access_token;
    }
    return data;
  },
  validateStatus: function (status) {
    if (window.location.pathname !== "/login") {
      if (status == 403) {
        window.location.pathname("/login");
      }
      if (status == 400) {
        console.log("400 error");
      }
    }
    return status >= 200 && status <= 204;
  },
});

export default axiosInstense;
