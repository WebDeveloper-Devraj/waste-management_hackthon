import { useRef } from "react";
import styles from "./AboutUs.module.css";
import { useDispatch } from "react-redux";
import { testimonialsActions } from "../../store/testimonials";

const ReviewForm = () => {
  const dispatch = useDispatch();

  const nameElement = useRef();
  const emailElement = useRef();
  const reviewElement = useRef();
  const ratingElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameElement.current.value,
      email: emailElement.current.value,
      text: reviewElement.current.value,
      rating: ratingElement.current.value,
    };
    console.log(payload);
    dispatch(testimonialsActions.addTestimonial(payload));

    nameElement.current.value = "";
    emailElement.current.value = "";
    reviewElement.current.value = "";
    ratingElement.current.value = "";
  };

  return (
    <section className={styles.reviewForm}>
      <div className={styles.reviewFormDiv}>
        <h2>Leave a Review</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              ref={nameElement}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailElement}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="review">Review</label>
            <textarea
              id="review"
              rows="4"
              ref={reviewElement}
              required
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="rating">Rating</label>
            <select id="rating" ref={ratingElement}>
              <option value={5}>5 - Excellent</option>
              <option value={4}>4 - Good</option>
              <option value={3}>3 - Average</option>
              <option value={2}>2 - Poor</option>
              <option value={1}>1 - Terrible</option>
            </select>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;
