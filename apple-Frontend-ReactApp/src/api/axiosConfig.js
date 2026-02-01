import axios from "axios";

const axiosBase = axios.create({
  // If VITE_API_URL is set (production), it uses that.
  // Otherwise, it defaults to your local backend.
  baseURL: import.meta.env.VITE_API_URL 


  // || "http://localhost:3001",

  // baseURL: "http://localhost:3001"
});

export default axiosBase;
