import React from "react";
import styles from "./Features.module.css";
import { FaMapMarkerAlt, FaAward, FaWind } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "Report Waste",
      description: "Tag and report waste sites in your community.",
      icon: <FaMapMarkerAlt className={styles.icon} />,
      link: "#",
    },
    {
      title: "Gamification",
      description: "Earn points and rewards for your eco-actions.",
      icon: <FaAward className={styles.icon} />,
      link: "#",
    },
    {
      title: "Pollution Tracking",
      description: "Access real-time AQI and pollution maps.",
      icon: <FaWind className={styles.icon} />,
      link: "#",
    },
  ];

  return (
    <div className={styles.featuresSection}>
      <h2 className={styles.heading}>What You Can Do on This Platform</h2>
      <div className={styles.cardContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            {feature.icon}
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDescription}>{feature.description}</p>
            <a href={feature.link} className={styles.learnMore}>
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
