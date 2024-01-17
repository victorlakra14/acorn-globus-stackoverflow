import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.stackexchange.com/"
})

export default axiosInstance;