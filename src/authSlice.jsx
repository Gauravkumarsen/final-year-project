import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null, // To store the user's profile details
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // Save user details in state
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null; // Clear user details
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
