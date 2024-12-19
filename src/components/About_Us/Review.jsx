import { useSelector } from "react-redux";
import styles from "./AboutUs.module.css";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const testimonials = useSelector((store) => store.testimonials);

  return (
    <>
      <section className={styles.reviewsSection}>
        <div className={styles.reviewsDiv}>
          <h2>Reviews</h2>
          <div className={styles.reviews}>
            {testimonials.map((testimonial, index) => (
              <ReviewCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
