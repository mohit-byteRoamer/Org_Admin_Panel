import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://fornax.onrender.com/api/v1/" ||
    process.env.liveServerURL ||
    process.env.localServerURL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("Authorization");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
