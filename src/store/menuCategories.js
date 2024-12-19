import { createSlice } from "@reduxjs/toolkit";

// starters dish images imports
import paneerTikka from "../assets/menu dishes/starters/paneerTikka.png";
import chickenWings from "../assets/menu dishes/starters/chickenWings.png";
import haraBharaKabab from "../assets/menu dishes/starters/haraBharaKabab.png";
import fishFingers from "../assets/menu dishes/starters/fishFingers.png";
import tanduriMashrooms from "../assets/menu dishes/starters/tanduriMashrooms.png";
import vegetableManchurian from "../assets/menu dishes/starters/vegetableManchurian.png";
import crispyCorn from "../assets/menu dishes/starters/crispyCorn.png";
import prawnTempura from "../assets/menu dishes/starters/prawnTempura.png";
import stuffedPotato from "../assets/menu dishes/starters/stuffedPotato.png";
import chilliCkicken from "../assets/menu dishes/starters/chilliCkicken.png";

// main course dish images imports
import butterChicken from "../assets/menu dishes/main course/butterChicken.png";
import paneerButterMasala from "../assets/menu dishes/main course/paneerButterMasala.png";
import chickenBiryani from "../assets/menu dishes/main course/chickenBiryani.png";
import dalMakhani from "../assets/menu dishes/main course/dalMakhani.png";
import lambRoganJosh from "../assets/menu dishes/main course/lambRoganJosh.png";
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

const initialState = {
  activeCategory: "All",
  categories: ["All", "Starters", "Main Course", "Desserts", "Beverages"],
  dishes: [
    {
      id: 1,
      category: "Starters",
      name: "Paneer Tikka",
      description: "Grilled cottage cheese cubes marinated in spices.",
      price: "$6",
      img: paneerTikka,
    },
    {
      id: 2,
      category: "Starters",
      name: "Chicken Wings",
      description: "Juicy chicken wings tossed in a tangy sauce.",
      price: "$8",
      img: chickenWings,
    },
    {
      id: 3,
      category: "Starters",
      name: "Hara Bhara Kebab",
      description: "Delicious spinach and green pea patties.",
      price: "$5",
      img: haraBharaKabab,
    },
    {
      id: 4,
      category: "Starters",
      name: "Fish Fingers",
      description: "Crispy fried fish sticks served with tartar sauce.",
      price: "$7",
      img: fishFingers,
    },
    {
      id: 5,
      category: "Starters",
      name: "Tandoori Mushrooms",
      description: "Mushrooms marinated in spicy yogurt and grilled.",
      price: "$6",
      img: tanduriMashrooms,
    },
    {
      id: 6,
      category: "Starters",
      name: "Vegetable Manchurian",
      description: "Fried veggie balls in a spicy soy-based sauce.",
      price: "$6",
      img: vegetableManchurian,
    },
    {
      id: 7,
      category: "Starters",
      name: "Crispy Corn",
      description: "Sweet corn kernels fried to perfection with spices.",
      price: "$5",
      img: crispyCorn,
    },
    {
      id: 8,
      category: "Starters",
      name: "Prawn Tempura",
      description: "Lightly battered prawns, fried until crispy.",
      price: "$10",
      img: prawnTempura,
    },
    {
      id: 9,
      category: "Starters",
      name: "Stuffed Potatoes",
      description: "Potato shells filled with a spicy vegetable mix.",
      price: "$6",
      img: stuffedPotato,
    },
    {
      id: 10,
      category: "Starters",
      name: "Chilli Chicken",
      description: "Spicy and tangy chicken chunks with peppers.",
      price: "$7",
      img: chilliCkicken,
    },
    {
      id: 11,
      category: "Main Course",
      name: "Butter Chicken",
      description: "Creamy tomato-based curry with tender chicken pieces.",
      price: "$15",
      img: butterChicken,
    },
    {
      id: 12,
      category: "Main Course",
      name: "Paneer Butter Masala",
      description: "Soft paneer cubes in a rich and creamy tomato gravy.",
      price: "$13",
      img: paneerButterMasala,
    },
    {
      id: 13,
      category: "Main Course",
      name: "Chicken Biryani",
      description:
        "Fragrant basmati rice cooked with spiced chicken and herbs.",
      price: "$16",
      img: chickenBiryani,
    },
    {
      id: 14,
      category: "Main Course",
      name: "Dal Makhani",
      description: "Slow-cooked black lentils in a creamy butter sauce.",
      price: "$12",
      img: dalMakhani,
    },
    {
      id: 15,
      category: "Main Course",
      name: "Lamb Rogan Josh",
      description: "Aromatic and flavorful lamb curry from Kashmir.",
      price: "$18",
      img: lambRoganJosh,
    },
    {
      id: 16,
      category: "Main Course",
      name: "Veg Pulao",
      description: "Fragrant rice cooked with mixed vegetables and spices.",
      price: "$10",
      img: vegPulao,
    },
    {
      id: 17,
      category: "Main Course",
      name: "Fish Curry",
      description: "Tangy and spicy fish curry cooked with coastal flavors.",
      price: "$15",
      img: fishCurry,
    },
    {
      id: 18,
      category: "Main Course",
      name: "Chana Masala",
      description: "Spicy and tangy chickpea curry with Indian spices.",
      price: "$11",
      img: chanaMasala,
    },
    {
      id: 19,
      category: "Main Course",
      name: "Goan Prawn Curry",
      description: "A tangy prawn curry with coconut milk and Goan spices.",
      price: "$17",
      img: goanPrawnCurry,
    },
    {
      id: 21,
      category: "Desserts",
      name: "Gulab Jamun",
      description: "Soft fried milk dumplings soaked in sugar syrup.",
      price: "$5",
      img: gulabJamun,
    },
    {
      id: 22,
      category: "Desserts",
      name: "Rasmalai",
      description: "Soft cottage cheese discs soaked in flavored milk.",
      price: "$6",
      img: rasMalai,
    },
    {
      id: 23,
      category: "Desserts",
      name: "Chocolate Brownie",
      description: "Rich and gooey chocolate brownie served warm.",
      price: "$4",
      img: chocolateBrownie,
    },
    {
      id: 24,
      category: "Desserts",
      name: "Ice Cream Sundae",
      description: "Scoops of ice cream topped with nuts, syrup, and cherries.",
      price: "$7",
      img: iceCreamSundae,
    },
    {
      id: 25,
      category: "Desserts",
      name: "Cheesecake",
      description: "A creamy slice of indulgent cheesecake.",
      price: "$8",
      img: cheesecake,
    },
    {
      id: 26,
      category: "Desserts",
      name: "Tiramisu",
      description:
        "Classic Italian dessert with layers of coffee-soaked cake and cream.",
      price: "$9",
      img: tiramisu,
    },
    {
      id: 27,
      category: "Desserts",
      name: "Kulfi",
      description:
        "Traditional Indian frozen dessert made from thickened milk.",
      price: "$5",
      img: kulfi,
    },
    {
      id: 28,
      category: "Beverages",
      name: "Fresh Lime Soda",
      description: "Refreshing soda with a twist of lime.",
      price: "$3",
      img: limeSoda,
    },
    {
      id: 29,
      category: "Beverages",
      name: "Mango Lassi",
      description: "Traditional Indian yogurt drink with mango.",
      price: "$4",
      img: mangoLassi,
    },
    {
      id: 30,
      category: "Beverages",
      name: "Iced Coffee",
      description: "Chilled coffee with a rich creamy flavor.",
      price: "$5",
      img: icedCofee,
    },
    {
      id: 31,
      category: "Beverages",
      name: "Masala Chai",
      description: "Classic Indian tea brewed with aromatic spices.",
      price: "$2",
      img: masalaChai,
    },
    {
      id: 35,
      category: "Beverages",
      name: "Peach Iced Tea",
      description: "Sweet and fruity iced tea with a peach twist.",
      price: "$5",
      img: peachIcedTea,
    },
    {
      id: 36,
      category: "Beverages",
      name: "Hot Chocolate",
      description: "Rich and creamy chocolate drink topped with whipped cream.",
      price: "$4",
      img: hotChocolate,
    },
  ],
};

const menuCategoriesSlice = createSlice({
  name: "menuCategories",
  initialState: initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const menuCategoriesSliceActions = menuCategoriesSlice.actions;
export default menuCategoriesSlice;
