import { createSlice } from "@reduxjs/toolkit";

import dish1 from "../assets/featured dishes/dish1.png";
import dish2 from "../assets/featured dishes/dish2.png";
import dish3 from "../assets/featured dishes/dish3.png";
import dish4 from "../assets/featured dishes/dish4.png";
import dish5 from "../assets/featured dishes/dish5.png";
import dish6 from "../assets/featured dishes/dish6.png";

const initialState = [
  {
    name: "Chilli Chicken",
    description:
      "Spicy and tangy chicken stir-fried with peppers, onions, and a flavorful soy-based sauce.",
    price: "$15",
    img: dish1,
  },
  {
    name: "Grilled Chicken Salad",
    description: "Fresh greens with perfectly grilled chicken.",
    price: "$17",
    img: dish2,
  },
  {
    name: "Prawn Fried Rice",
    description:
      "Long-grain rice stir-fried with juicy prawns, eggs, and veggies, seasoned with soy sauce.",
    price: "$20",
    img: dish3,
  },
  {
    name: "Cheesecake",
    description: "A creamy slice of indulgent cheesecake.",
    price: "$8",
    img: dish4,
  },
  {
    name: "Hot and Sour Soup",
    description:
      "A tangy and spicy soup made with mixed vegetables and flavorful Asian spices.",
    price: "$10",
    img: dish5,
  },
  {
    name: "Chilli Paneer",
    description:
      " Soft paneer cubes stir-fried with bell peppers, onions, and spicy sauces, served dry or with gravy.",
    price: "$15",
    img: dish6,
  },
];

const featuredDishesSlice = createSlice({
  name: "featuredDishes",
  initialState: initialState,
  reducers: {},
});

export const featuredDishesActions = featuredDishesSlice.actions;
export default featuredDishesSlice;
