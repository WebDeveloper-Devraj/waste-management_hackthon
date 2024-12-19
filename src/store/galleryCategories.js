import { createSlice } from "@reduxjs/toolkit";

// starters dish images imports
import vegPulao from "../assets/menu dishes/main course/vegPulao.png";
import fishCurry from "../assets/menu dishes/main course/fishCurry.png";
import chanaMasala from "../assets/menu dishes/main course/chanaMasala.png";
import goanPrawnCurry from "../assets/menu dishes/main course/goanPrawnCurry.png";

// main course dish images imports
import gulabJamun from "../assets/menu dishes/desserts/gulabJamun.png";
import rasMalai from "../assets/menu dishes/desserts/rasMalai.png";
import chocolateBrownie from "../assets/menu dishes/desserts/chocolateBrownie.png";
import iceCreamSundae from "../assets/menu dishes/desserts/iceCreamSundae.png";
import cheesecake from "../assets/menu dishes/desserts/cheesecake.png";
import tiramisu from "../assets/menu dishes/desserts/tiramisu.png";
import kulfi from "../assets/menu dishes/desserts/kulfi.png";

// Beverages dish images imports
import limeSoda from "../assets/menu dishes/beverages/limeSoda.png";
import mangoLassi from "../assets/menu dishes/beverages/mangoLassi.png";
import icedCofee from "../assets/menu dishes/beverages/icedCofee.png";
import masalaChai from "../assets/menu dishes/beverages/masalaChai.png";
import peachIcedTea from "../assets/menu dishes/beverages/peachIcedTea.png";
import hotChocolate from "../assets/menu dishes/beverages/hotChocolate.png";

// Ambiance & Interiors videos imports
import video1 from "../assets/gallery page/video1.mp4";
import video2 from "../assets/gallery page/video2.mp4";
import video3 from "../assets/gallery page/video3.mp4";
import video4 from "../assets/gallery page/video4.mp4";
import video5 from "../assets/gallery page/video5.mp4";
import video6 from "../assets/gallery page/video6.mp4";

const initialState = {
  activeCategory: "Ambiance & Interiors",
  activeSubCategory: "Photos",
  categories: [
    "Ambiance & Interiors",
    "Food & Drinks",
    "Events & Celebrations",
    "Behind the Scenes",
  ],
  subCategories: ["Photos", "Videos"],
  galleryImages: [
    {
      category: "Main Course",
      img: vegPulao,
    },
    {
      category: "Main Course",
      img: fishCurry,
    },
    {
      category: "Main Course",
      img: chanaMasala,
    },
    {
      category: "Main Course",
      img: goanPrawnCurry,
    },
    {
      category: "Desserts",
      img: gulabJamun,
    },
    {
      category: "Desserts",
      img: rasMalai,
    },
    {
      category: "Desserts",
      img: chocolateBrownie,
    },
    {
      category: "Desserts",
      img: iceCreamSundae,
    },
    {
      category: "Desserts",
      img: cheesecake,
    },
    {
      category: "Desserts",
      price: "$9",
      img: tiramisu,
    },
    {
      category: "Desserts",
      price: "$5",
      img: kulfi,
    },
    {
      category: "Beverages",
      img: limeSoda,
    },
    {
      category: "Beverages",
      img: mangoLassi,
    },
    {
      category: "Beverages",
      img: icedCofee,
    },
    {
      category: "Beverages",
      img: masalaChai,
    },
    {
      category: "Beverages",
      img: peachIcedTea,
    },
    {
      category: "Beverages",
      img: hotChocolate,
    },
  ],
  galleryVideos: [
    {
      category: "Ambiance & Interiors",
      src: video1,
    },
    {
      category: "Ambiance & Interiors",
      src: video2,
    },
    {
      category: "Ambiance & Interiors",
      src: video3,
    },
    {
      category: "Ambiance & Interiors",
      src: video4,
    },
    {
      category: "Ambiance & Interiors",
      src: video5,
    },
    {
      category: "Ambiance & Interiors",
      src: video6,
    },
  ],
};

const galleryCategoriesSlice = createSlice({
  name: "galleryCategories",
  initialState: initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setActiveSubCategory: (state, action) => {
      state.activeSubCategory = action.payload;
    },
  },
});

export const galleryCategoriesActions = galleryCategoriesSlice.actions;
export default galleryCategoriesSlice;
