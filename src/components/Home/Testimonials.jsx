import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";
import { useSelector } from "react-redux";

const Testimonials = () => {
  const testimonials = useSelector((store) => store.testimonials);

  return (
    <section id={styles.testimonials}>
      <h2>
        <span>What Our Customers Say</span>
      </h2>
      <div className={styles.testimonial_cards}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard testimonial={testimonial} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
