import CategoryButton from "../CategoryButton";
import styles from "./Gallery.module.css";
import { useSelector } from "react-redux";

const Categories = () => {
  const {
    galleryImages: images,
    galleryVideos: videos,
    activeCategory,
    activeSubCategory,
    categories,
    subCategories,
  } = useSelector((store) => store.galleryCategories);

  return (
    <section className={styles.categoriesSection}>
      <h2>Our Gallery</h2>
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

      <div className={styles.subCategories}>
        {subCategories.map((subCategory) => (
          <CategoryButton
            key={subCategory}
            category={subCategory}
            activeCategory=""
            activeSubCategory={activeSubCategory}
          />
        ))}
      </div>

      <div className={styles.galleryItems}>
        {/* Placeholder for gallery images/videos */}
        {activeSubCategory === "Photos"
          ? images.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <img src={image.img} alt={`Gallery Item ${index + 1}`} />
              </div>
            ))
          : videos.map((video, index) => (
              <div key={index} className={styles.galleryItem}>
                <video src={video.src} controls muted></video>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Categories;
