import React from "react";
import styles from "./EducationPage.module.css";

const tutorials = [
  {
    title: "Recycling Basics",
    description:
      "Learn how to sort and recycle common household waste effectively.",
    link: "https://www.youtube.com/embed/jsp7mgYv3aI?si=IoBkcCxf7vKh2ftK",
  },
  {
    title: "Composting at Home",
    description: "Turn your kitchen waste into nutrient-rich compost.",
    link: "https://www.youtube.com/embed/mDIVpJgjoXQ?si=UGoljpJCWnsMXN78",
  },
  {
    title: "Eco-Friendly Habits",
    description: "Simple changes to reduce your carbon footprint.",
    link: "https://www.youtube.com/embed/sWrfRXZlLaE?si=sSXh8XtfCTyEEQL-",
  },
];

const quizzes = [
  {
    title: "Recycling Quiz",
    description: "Test your knowledge on recycling best practices.",
    link: "https://recyclesmartma.org/quiz-2-0/",
  },
  {
    title: "Sustainability Challenge",
    description: "How much do you know about sustainable living?",
    link: "https://www.planete-energies.com/en/quiz/quiz-sustainable-development-goals-medium-level?node_source=3311&block_source=15341",
  },
];

const challenges = [
  "Take a week-long challenge to eliminate single-use plastics.",
  "Plant a tree and share your experience.",
  "Reduce your water usage for a month.",
];

const EducationPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Education & Awareness</h1>

      {/* Tutorials Section */}
      <div className={styles.section}>
        <h2>Tutorials</h2>
        <div className={styles.cardContainer}>
          {tutorials.map((tutorial, index) => (
            <div key={index} className={styles.card}>
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              <a href={tutorial.link} className={styles.link}>
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Quizzes Section */}
      <div className={styles.section}>
        <h2>Quizzes</h2>
        <div className={styles.cardContainer}>
          {quizzes.map((quiz, index) => (
            <div key={index} className={styles.card}>
              <h3>{quiz.title}</h3>
              <p>{quiz.description}</p>
              <a href={quiz.link} className={styles.link}>
                Start Quiz
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Challenges Section */}
      <div className={styles.section}>
        <h2>Interactive Challenges</h2>
        <ul className={styles.challengeList}>
          {challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Resources Section */}
      <div className={`${styles.section} ${styles.resources}`}>
        <h2>Resources</h2>
        <p>
          Explore our library of resources to learn more about environmental
          conservation, waste management, and sustainable practices.
          <a href="#">Visit Resources</a>
        </p>
      </div>
    </div>
  );
};

export default EducationPage;
