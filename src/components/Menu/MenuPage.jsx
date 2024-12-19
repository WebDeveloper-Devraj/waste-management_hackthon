import styles from "./MenuPage.module.css";
import menuHero from "../../assets/menuHero.mp4";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoryButton from "../CategoryButton";
import DishCard from "./DishCard";

const MenuPage = () => {
  const { dishes, activeCategory, categories } = useSelector(
    (store) => store.menuCategories
  );

  const filteredDishes =
    activeCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <div className={styles.menu_page}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        {/* Background Video */}
        <div className={styles.video_background}>
          <video autoPlay muted loop>
            <source src={`${menuHero}`} type="video/mp4" />
            {/* Your browser does not support the video tag. */}
          </video>
        </div>

        {/* Overlay for text visibility */}
        <div className={styles.overlay}></div>

        {/* Centered Content */}
        <div className={styles.content}>
          <h1>Explore Our Delicious Menu</h1>
          <p>From appetizers to desserts, savor the taste of excellence!</p>

          {/* CTA Buttons */}
          <div className={styles.cta_buttons}>
            <button className={`${styles.cta_btn} ${styles.order_now}`}>
              Order Now
            </button>
            <Link to="/gallery">
              <button className={`${styles.cta_btn} ${styles.view_gallery}`}>
                View Gallery
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className={styles.menu_section}>
        <div className={styles.categories}>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              activeCategory={activeCategory}
              activeSubCategory=""
            />
          ))}
        </div>

        {/* Dishes div */}
        <div className={styles.dishes}>
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
