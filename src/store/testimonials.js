import { createSlice } from "@reduxjs/toolkit";

import person1 from "../assets/testimonials/person1.png";
import person2 from "../assets/testimonials/person2.png";
import person3 from "../assets/testimonials/person3.png";
import person4 from "../assets/testimonials/person4.png";
import person5 from "../assets/testimonials/person5.png";

const initialState = [
  {
    name: "Emily Carter",
    text: "This restaurant has redefined my dining experience! From the first bite to the last, everything was just perfect. Highly recommended for food lovers.",
    image: person1,
  },
  {
    name: "Michael Johnson",
    text: "The service was impeccable, and the food was beyond delicious. I can't wait to visit again and try more of their dishes!",
    image: person2,
  },
  {
    name: "Sophia Martinez",
    text: "The flavors here are so authentic and fresh! The atmosphere makes it even better. It’s my go-to place for family dinners.",
    image: person3,
  },
  {
    name: "Aarav Sharma",
    text: "Absolutely incredible! The presentation and taste of each dish are outstanding. The staff is friendly and attentive. A must-visit restaurant!",
    image: person4,
  },
  {
    name: "Mira Patel",
    text: "Loved every bit of my experience here. The variety on the menu caters to everyone, and the desserts are heavenly. Can't wait to bring my friends next time!",
    image: person5,
  },
];

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState: initialState,
  reducers: {
    addTestimonial: (state, action) => (state = [action.payload, ...state]),
  },
});

export const testimonialsActions = testimonialsSlice.actions;
export default testimonialsSlice;
