// themesSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  mode: "light" | "dark";
}

const initialState: ThemeState = {
  mode: "light",
};

const themesSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
    },
  },
});

export const { setThemeMode } = themesSlice.actions;
export const selectThemeMode = (state: { themes: ThemeState }) =>
  state.themes.mode;
export default themesSlice.reducer;
