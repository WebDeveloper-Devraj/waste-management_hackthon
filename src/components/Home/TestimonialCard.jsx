import styles from "./Testimonials.module.css";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className={styles.testimonial_card}>
      <img src={testimonial.image} alt={testimonial.name} />
      <p>"{testimonial.text}"</p>
      <h4>- {testimonial.name}</h4>
    </div>
  );
};

export default TestimonialCard;
