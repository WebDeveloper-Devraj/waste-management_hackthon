import styles from "./MenuPage.module.css";

const DishCard = ({ dish }) => {
  return (
    <div className={styles.dish_card}>
      <img src={dish.img} alt={dish.name} />
      <div className={styles.dish_card_body}>
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
      </div>
      <span>{dish.price}</span>
      <button className={styles.order_btn}>Order Now</button>
    </div>
  );
};

export default DishCard;
