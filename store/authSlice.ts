import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import authService from "./services/authService";
import Toast from "react-native-toast-message";
import { AxiosInstance } from "axios"; // Import AxiosInstance
import devInstance from "./devInstance";
// import devInstance from "./devInstance"; Remove this import

interface AuthState {
    user: object;
    token: string;
    loading: boolean;
    isLoggedIn: boolean;
    error: string | null;
    emailVerified: boolean; // Add email verification status
}

const initialState: AuthState = {
    user: {},
    token: "",
    loading: false,
    isLoggedIn: false,
    error: null,
    emailVerified: false, // Initialize email verification status
};

// Pass AxiosInstance as an argument to the thunk action creators
export const loginUser = createAsyncThunk(
    "/auth",
    async (userData: object, { rejectWithValue, extra }) => { // Destructure extra to access devInstance
        try {
            return await authService.loginUser(userData);
        } catch (error: any) {
            const message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            return rejectWithValue(message);
        }
    }
);

export const verifyEmail = createAsyncThunk(
    "/auth/verify-email",
    async ({ email, verificationToken }: { email: string; verificationToken: string }, { rejectWithValue, extra }) => { // Destructure extra to access devInstance
        const devInstance: AxiosInstance = extra as AxiosInstance; // Access devInstance from extra
        try {
            const response = await devInstance.post("/verify-email", { email, verificationToken });
            return response.data; // Assuming the response contains the verification status
        } catch (error: any) {
            const message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            return rejectWithValue(message);
        }
    }
);

// Slice creation
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {};
            state.token = "";
            state.isLoggedIn = false;
            state.error = null;
        },
        // Add reducer to update isLoggedIn state when user logs in
        loginSuccess: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
            state.token = action.payload.token;
            state.loading = false;
            state.isLoggedIn = true;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null; // Clear any previous error
            })
            .addCase(
                loginUser.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    Toast.show({
                        type: "success",
                        text1: "You have successfully logged in",
                        text2: "Pick your interests to continue",
                    });
                }
            )
            .addCase(
                loginUser.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload; // Store error message
                    Toast.show({
                        type: "error",
                        text1: "Login Failed", // Display generic error message
                        text2: action.payload, // Display error message from payload
                    });
                }
            )
            .addCase(verifyEmail.pending, (state) => {
                state.loading = true;
                state.error = null; // Clear any previous error
            })
            .addCase(
                verifyEmail.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.emailVerified = action.payload.emailVerified;
                    if (action.payload.emailVerified) {
                        Toast.show({
                            type: "success",
                            text1: "Email Verified",
                            text2: "You can now access your account.",
                        });
                    } else {
                        Toast.show({
                            type: "error",
                            text1: "Email Verification Failed",
                            text2: "Please try again or contact support.",
                        });
                    }
                }
            )
            .addCase(
                verifyEmail.rejected,
                (state, action: any) => {
                    state.loading = false;
                    state.error = action.payload; // Store error message
                    Toast.show({
                        type: "error",
                        text1: "Email Verification Failed",
                        text2: action.payload, // Display error message from payload
                    });
                }
            );
    },
});

export const setAuthToken = (token: string | null) => {
    if (token) {
        devInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete devInstance.defaults.headers.common.Authorization;
    }
};

// Export action creators
export const { logout, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
