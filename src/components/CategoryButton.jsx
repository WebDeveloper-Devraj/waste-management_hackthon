import { useDispatch } from "react-redux";
import { menuCategoriesSliceActions } from "../store/menuCategories";
import styles from "./CategoryButton.module.css";
import { galleryCategoriesActions } from "../store/galleryCategories";

const CategoryButton = ({ category, activeCategory, activeSubCategory }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={`${activeCategory === category ? styles.active : ""} ${
        activeSubCategory === category ? styles.subActive : ""
      }`}
      onClick={() => {
        if (activeCategory != "") {
          dispatch(galleryCategoriesActions.setActiveCategory(category));
        } else {
          dispatch(galleryCategoriesActions.setActiveSubCategory(category));
        }
      }}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
