import React from "react";
import styles from "./SuccessStories.module.css";

import story1 from "../../assets/featured dishes/story1.png";
import story2 from "../../assets/featured dishes/story2.png";
import story3 from "../../assets/featured dishes/story3.png";

const SuccessStories = () => {
  const stories = [
    {
      image: story1, // Replace with real image URLs
      name: "Aarav Patel",
      quote:
        "“This platform helped our community clean up 10 tons of waste in a month!”",
    },
    {
      image: story2, // Replace with real image URLs
      name: "Sneha Reddy",
      quote:
        "“Using this app, our group organized a cleanup drive and transformed our local park!”",
    },
    {
      image: story3, // Replace with real image URLs
      name: "Rahul Sharma",
      quote:
        "“The gamification features motivated my friends and me to recycle more than ever!”",
    },
  ];

  return (
    <div className={styles.successSection}>
      <h2 className={styles.heading}>Real Impact by Real People</h2>
      <div className={styles.storiesContainer}>
        {stories.map((story, index) => (
          <div key={index} className={styles.storyCard}>
            <img
              src={story.image}
              alt={story.name}
              className={styles.storyImage}
            />
            <h3 className={styles.storyName}>{story.name}</h3>
            <p className={styles.storyQuote}>{story.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
