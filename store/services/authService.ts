import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthToken } from "../authSlice";
import {devInstance} from "../devInstance"; // Import without curly braces
import Toast from "react-native-toast-message"; // Import the toast library

const loginUser = async (userData: object) => {
    try {
        const res = await devInstance.post("/login", {
            email: userData.email,
            password: userData.password,
        });
        
        // Check if response data exists and contains access_token
        if (res.data && res.data.access_token) {
            setAuthToken(res.data.access_token);
            return res.data;
        } else {
            // Throw an error if response does not contain expected data
            throw new Error("Unexpected response format from login API");
        }
    } catch (error) {
        // Display a toast message for login failed
        Toast.show({
            type: "error",
            text1: "Login Failed",
            text2: error.message || "An unexpected error occurred",
        });

        // Handle error
        console.error("Login failed:", error);
        throw error; // Optionally rethrow the error
    }
};



const registerUser = async (userData: any) => {
    try {
        const res = await devInstance.post("/signup", {
            // Assuming the signup endpoint is /signup
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            password: userData.password,
            phonenumber: userData.phonenumber
        });

        
        console.log(res.data.data);
        return res.data.data;
        
    } catch (error) {
        // Handle error
        console.error("Registration failed:", error);
        throw error; // Optionally rethrow the error
    }
};

const verifyEmail = createAsyncThunk(
    "/auth/verify-email",
    async ({ email, verificationToken }: { email: string; verificationToken: string }, thunkAPI) => {
        try {
            const response = await devInstance.post("/verify-email", { email, verificationToken });
            return response.data; // Assuming the response contains the verification status
        } catch (error: any) {
            const message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


const authService = {
    loginUser,
    registerUser,
    verifyEmail
};

export default authService;
