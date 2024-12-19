import React from "react";
import styles from "./HeroSection.module.css";
import hackHomeHero from "../../assets/hackHomeHero.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Open+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <section className={styles.hero_section}>
        {/* Background Video */}
        <div className={styles.video_background}>
          <video autoPlay muted loop>
            <source src={hackHomeHero} type="video/mp4" />
            {/* Your browser does not support the video tag. */}
          </video>
        </div>

        {/* Overlay for text visibility */}
        <div className={styles.overlay}></div>

        {/* Centered Content */}
        <div className={styles.content}>
          <h1>"Be the Change Earth Needs"</h1>
          <p>Empower Your Community, Protect the Environment.</p>

          {/* CTA Buttons */}
          <div className={styles.cta_buttons}>
            <button className={`${styles.cta_btn} ${styles.order_now}`}>
              Report Waste
            </button>
            <Link to="/menu">
              <button className={`${styles.cta_btn} ${styles.view_menu}`}>
                Join the Movement
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
