import type { IUserProfile } from "@/data/user";
import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage: IUserProfile = webStorageClient.get(
  constants.USER_INFO,
) || {
  user: {
    userName: "",
    email: "",
    password: "",
    role: "user",
  },
  dayOfBirth: "",
  bio: "",
  nickname: "",
  gender: "Khác",
};

const accessTokenFromStorage = webStorageClient.getToken();

interface AuthState {
  userInfo: IUserProfile;
  isAuth: boolean;
}

const initialState: AuthState = {
  userInfo: userInfoFromStorage,
  isAuth: !!accessTokenFromStorage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    actionLogin: (state, action) => {
      state.userInfo = action.payload;
      state.isAuth = true;
      webStorageClient.set(constants.USER_INFO, action.payload);
    },

    logout: (state) => {
      state.userInfo = {
        user: {
          userName: "",
          email: "",
          password: "",
          avatar: "",
          role: "user",
        },
        dayOfBirth: "",
        bio: "",
        nickname: "",
        gender: "Khác",
      };
      state.isAuth = false;
      webStorageClient.removeAll();
    },

    updateProfile: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
      webStorageClient.set(constants.USER_INFO, state.userInfo);
    },
  },
});

export const { actionLogin, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
