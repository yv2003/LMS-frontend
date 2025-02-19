import axios from "axios";
// require('dotenv').config();
const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000",
  // baseURL:process.env.PUBLIC_BASE_URL,
  baseURL:"https://lms-backend-zqvc.onrender.com"
});
console.log(axiosInstance.defaults.baseURL);
// console.log(process.env.PUBLIC_BASE_URL);

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
