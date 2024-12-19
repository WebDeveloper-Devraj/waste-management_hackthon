import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLoginPage: false,
  showSignUpPage: false,
  open: false,
};

const loginSignUpSlice = createSlice({
  name: "loginSignUpUi",
  initialState: initialState,
  reducers: {
    toggleLoginPage: (state) => {
      state.showLoginPage = !state.showLoginPage;
    },

    toggleSignUpPage: (state) => {
      state.showSignUpPage = !state.showSignUpPage;
    },

    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const loginSignUpActions = loginSignUpSlice.actions;

export default loginSignUpSlice;
