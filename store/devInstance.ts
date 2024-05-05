import axios from "axios";
import { setAuthToken } from "./authSlice";

const API_URL = "https://revas-backend.onrender.com/api/auth";

export const devInstance = axios.create({
    baseURL: API_URL,
});

devInstance.interceptors.request.use(
    (config) => {
        // Set headers here if needed
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

devInstance.interceptors.response.use(
    (response) => {
        // Do something with the response data
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            setAuthToken(null);
            // Handle unauthorized access here
        }
        return Promise.reject(error);
    }
);

export default devInstance;
