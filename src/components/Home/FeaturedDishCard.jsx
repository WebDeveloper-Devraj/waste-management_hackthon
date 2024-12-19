import styles from "./FeaturedDishes.module.css";

const FeaturedDishCard = ({ dish }) => {
  return (
    <div className={`card ${styles.dish_card}`}>
      <img src={dish.img} className="card-img-top" alt={dish.name} />
      <div className="card-body">
        <h3 className="card-title">{dish.name}</h3>
        <p className={`card-text ${styles.dish_description}`}>
          {dish.description}
        </p>
        <span className={styles.dish_price}>{dish.price}</span>
        <div>
          <a
            href="#"
            className={`btn btn-primary ${styles.cta_btn} ${styles.order_now}`}
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default FeaturedDishCard;
