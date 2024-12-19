import { Link } from "react-router-dom";
import styles from "./FeaturedDishes.module.css";

const FeaturedDishes = () => {
  return (
    <section id={styles.problemStatementsSection}>
      <h2>
        <span>"Why Take Action Today?"</span>
      </h2>
      <div className={styles.problems}>
        <div className={styles.problem}>
          <h4>Waste Management Crisis:</h4>
          <p>
            Over 5 million tons of waste go unreported every year in India,
            polluting our streets, rivers, and oceans.
          </p>
          <p>
            Improper waste disposal contributes to over 40% of urban health
            issues.
          </p>
        </div>
        <div className={styles.problem}>
          <h4>Rising Air Pollution:</h4>
          <p>
            Air pollution in major Indian cities has increased by 20% annually,
            leading to severe health hazards.
          </p>
          <p>India accounts for 35 of the world’s 50 most polluted cities.</p>
        </div>
        <div className={styles.problem}>
          <h4>Environmental Degradation</h4>
          <p>
            Plastic waste contributes to 10 million tons of ocean pollution
            annually, harming marine life.
          </p>
          <p>
            Deforestation and waste dumping are shrinking green spaces, reducing
            biodiversity by 30%.
          </p>
        </div>
        <div className={styles.problem}>
          <h4>Health and Safety at Risk</h4>
          <p>
            Unmanaged waste and air pollution contribute to over 2 million
            deaths annually in India due to respiratory and waterborne diseases.
          </p>
          <p>
            Poor waste disposal impacts local agriculture, contaminating crops
            and water with harmful chemicals
          </p>
        </div>
      </div>

      <Link to="/education">
        <button className={`${styles.cta_btn} ${styles.learnMore}`}>
          Learn More...
        </button>
      </Link>
    </section>
  );
};

export default FeaturedDishes;
