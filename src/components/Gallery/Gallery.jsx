import React from "react";
import styles from "./Gallery.module.css";
import GalleryHero from "./GalleryHero";
import GalleryCategories from "./GalleryCategories";

const Gallery = () => {
  return (
    <div className={styles.galleryPage}>
      <GalleryHero />

      {/* Photo and Video Categories */}
      <div className={styles.gallerySection}>
        <GalleryCategories />

        {/* Customer Highlights */}
        <section className={styles.customerHighlightsSection}>
          <h2>Customer Highlights</h2>
          <p>Tag us @YourRestaurant to get featured in our gallery!</p>
          <div className={styles.customerGallery}>
            {/* Placeholder for customer images */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className={styles.customerItem}>
                <img
                  src={`/assets/customers/customer-${index + 1}.jpg`}
                  alt={`Customer ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Submission */}
        <section className={styles.submissionSection}>
          <h2>Submit Your Photos</h2>
          <form className={styles.submissionForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="photo">Upload Photo:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              required
            />

            <button type="submit">Submit</button>
          </form>
          <p>Or tag us on social media to be featured!</p>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
