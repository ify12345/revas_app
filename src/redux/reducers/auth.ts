/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { continueWithGoogle, getUser, login, register } from '~api/auth';
import { updateProfile, updateProfilePhoto } from '~api/profile';
import { User } from '~types';

interface State {
  user: User;
  isAuthenticated: boolean;
  isEmailVerified: boolean;
}

const initialState: State = {
  user: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    updatedat: '',
    createdat: '',
    emailverified: false
  },
  isAuthenticated: false,
  isEmailVerified: false
};
interface RegisterResponse {
  user: User;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUserDetails: (state, action: PayloadAction<User>) => {
      state.user = { ...state.user, ...action.payload };
    },
    success: (state) => {
      state.isEmailVerified = true;
    },
    logout: () => ({ ...initialState })
  },
  extraReducers(builder) {
    builder
      // Handle registration fulfilled action
      .addCase(register.fulfilled, (state, { payload }: PayloadAction<RegisterResponse>) => {
        console.log('payloadsheet', payload.user);
        const { id, firstname, lastname, email, phonenumber, updatedat, createdat, emailverified } = payload.user;
        state.user = { id, firstname, lastname, email, phonenumber, updatedat, createdat, emailverified };
        state.isAuthenticated = true;
        state.isEmailVerified = emailverified;
      })
      // Handle login fulfilled action
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log('payloadsheet', payload.user);
        state.user = payload.data.profile; // Check payload structure
        state.isAuthenticated = true;
        state.isEmailVerified = payload.data.profile.emailverified; // Adjust if necessary
      })
      // Handle continueWithGoogle fulfilled action
      .addCase(continueWithGoogle.fulfilled, (state, { payload }) => {
        state.user = payload.data.profile; // Check payload structure
        state.isAuthenticated = true;
        state.isEmailVerified = payload.data.profile.emailverified; // Adjust if necessary
      })
      // Handle updateProfile and updateProfilePhoto fulfilled actions
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.user = payload.data; // Check payload structure
      })
      .addCase(updateProfilePhoto.fulfilled, (state, { payload }) => {
        state.user = payload.data; // Check payload structure
      });
  },
});

export const {getUserDetails, success, logout} = authSlice.actions
export default authSlice.reducer