import { configureStore } from "@reduxjs/toolkit";
import scrollSlice from "./scroll";
import loginSignUpSlice from "./loginSignUp";
import testimonialsSlice from "./testimonials";

const restaurantStore = configureStore({
  reducer: {
    scroll: scrollSlice.reducer,
    loginSignUpUi: loginSignUpSlice.reducer,
    testimonials: testimonialsSlice.reducer,
  },
});

export default restaurantStore;
