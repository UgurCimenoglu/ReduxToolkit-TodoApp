import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

type UserData = {
  id: number;
  name: string;
};
interface IUser {
  User: UserData | boolean;
}

const initialState: IUser = {
  User: false,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<UserData>) => {
      state.User = action.payload;
    },
    logOut: (state) => {
      state.User = false;
    },
  },
});

export const { logIn, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
