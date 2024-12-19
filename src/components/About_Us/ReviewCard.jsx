import styles from "./AboutUs.module.css";

const ReviewCard = ({ testimonial }) => {
  return (
    <div className={styles.review}>
      <img src={testimonial.image} alt="Customer 1" />
      <blockquote>{testimonial.text}</blockquote>
      <p> - {testimonial.name}</p>
    </div>
  );
};

export default ReviewCard;
