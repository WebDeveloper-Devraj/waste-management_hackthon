import { createSlice } from "@reduxjs/toolkit";
import member2 from "../assets/about us/member2.png";
import member3 from "../assets/about us/member3.png";
import member4 from "../assets/about us/member4.png";
import member5 from "../assets/about us/member5.png";
import member6 from "../assets/about us/member6.png";

const initialState = [
  {
    img: member2,
    name: "Chef John Doe",
    description:
      "A culinary visionary with over 15 years of experience in fine dining. Known for his exceptional mastery of spices, Chef John leads the kitchen with precision and creativity, crafting dishes that tell a story of tradition and innovation.",
  },
  {
    img: member2,
    name: "Chef Jane Smith",
    description:
      "Our celebrated pastry specialist, Chef Jane has spent a decade perfecting the art of desserts. Her creations are a harmonious blend of flavors and textures, delighting every palate with her passion for detail and artistic presentation.",
  },
  {
    img: member3,
    name: "Chef Michael Brown",
    description:
      "With an unyielding dedication to sourcing the finest local ingredients, Chef Michael is our farm-to-table expert. His ability to transform fresh, seasonal produce into exquisite culinary experiences sets him apart as a true craftsman.",
  },
  {
    img: member4,
    name: "Chef Emma Wilson",
    description:
      "A maestro of modern vegetarian cuisine, Chef Emma brings a fresh perspective to our team. Her innovative plant-based creations are not only visually stunning but also packed with bold, unforgettable flavors.",
  },
  {
    img: member5,
    name: "Chef David Martinez",
    description:
      "Known as the grill master of the team, Chef David specializes in open-flame cooking. With a knack for bold marinades and perfectly charred dishes, he brings smoky perfection to every plate.",
  },
  {
    img: member6,
    name: "Chef Liam Turner",
    description:
      "A seafood aficionado with a deep respect for the ocean’s bounty, Chef Liam excels in preparing fresh, sustainable seafood dishes. His attention to detail and creative approach ensure every bite is a masterpiece.",
  },
];

const membersSlice = createSlice({
  name: "members",
  initialState: initialState,
  reducers: {},
});

export const membersSliceActions = membersSlice.actions;
export default membersSlice;
