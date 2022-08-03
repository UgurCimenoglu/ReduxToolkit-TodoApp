import { configureStore } from "@reduxjs/toolkit";
import Todo from "./slice/Todo";
import Auth from "./slice/Auth";
import Theme from "./slice/Theme";

export const store = configureStore({
  reducer: {
    Todo,
    Auth,
    Theme,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
