import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

type UserData = {
  id: number;
  name: string;
};
interface IUser {
  User: UserData | null;
}

const initialState: IUser = {
  User: null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<UserData>) => {
      state.User = action.payload;
    },
    logOut: (state) => {
      state.User = null;
    },
  },
});

export const { logIn, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
 