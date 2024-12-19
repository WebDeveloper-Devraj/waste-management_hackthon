import { configureStore } from "@reduxjs/toolkit";
import scrollSlice from "./scroll";
import loginSignUpSlice from "./loginSignUp";
import featuredDishesSlice from "./FeaturedDishes";
import testimonialsSlice from "./testimonials";
import menuCategoriesSlice from "./menuCategories";
import membersSlice from "./members";
import galleryCategoriesSlice from "./galleryCategories";

const restaurantStore = configureStore({
  reducer: {
    scroll: scrollSlice.reducer,
    loginSignUpUi: loginSignUpSlice.reducer,
    featuredDishes: featuredDishesSlice.reducer,
    testimonials: testimonialsSlice.reducer,
    menuCategories: menuCategoriesSlice.reducer,
    members: membersSlice.reducer,
    galleryCategories: galleryCategoriesSlice.reducer,
  },
});

export default restaurantStore;
