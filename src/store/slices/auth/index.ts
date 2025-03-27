import type { IUser } from "@/data/user";
import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage: IUser = webStorageClient.get(
  constants.USER_INFO,
) || { userName: "", gender: "" };
const accessTokenFromStorage = webStorageClient.getToken();

interface AuthSlickInterface {
  userInfo: IUser;
  access_token: any;
  isAuth: boolean;
}

const initialState: AuthSlickInterface = {
  userInfo: userInfoFromStorage,
  access_token: accessTokenFromStorage || null,
  isAuth: !!userInfoFromStorage || false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    actionLogin: (state, action) => {
      state.userInfo = action.payload;
      webStorageClient.set(constants.USER_INFO, action.payload);
    },
    actionSetIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    updateProfile: (state, action) => {
      webStorageClient.removeAll();
      state.userInfo = action.payload;
      webStorageClient.set(constants.USER_INFO, action.payload);
    },
  },
});

export const { actionLogin, actionSetIsAuth, updateProfile } =
  authSlice.actions;

export default authSlice.reducer;
