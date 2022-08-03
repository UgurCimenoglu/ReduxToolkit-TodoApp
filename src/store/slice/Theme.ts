import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: false,
};
export const ThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
