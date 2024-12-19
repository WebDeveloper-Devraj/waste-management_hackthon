import React from "react";
import styles from "./Dashboard.module.css";
import person from "../../assets/about us/member3.png";
import {
  FaBell,
  FaSignOutAlt,
  FaMedal,
  FaLeaf,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Dashboard = () => {
  const userName = "Devarj Pujari";
  const ecoScore = 80;
  const points = 500;

  const achievements = [
    { id: 1, name: "Waste Warrior", icon: <FaLeaf /> },
    { id: 2, name: "Pollution Tracker", icon: <FaMapMarkerAlt /> },
    { id: 3, name: "Community Champion", icon: <FaMedal /> },
  ];

  const activityHistory = [
    { id: 1, action: "Reported waste at Central Park", points: 5 },
    { id: 2, action: "Tracked pollution in Greenway Area", points: 10 },
    { id: 3, action: "Participated in cleanup drive", points: 20 },
  ];

  return (
    <div className={styles.dashboard}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.profile}>
          <img
            src={person} // Replace with user's profile image
            alt="User Profile"
            className={styles.profileImage}
          />
          <div className={styles.greeting}>
            <h1>Good Morning, {userName}!</h1>
            <p>Welcome back to your dashboard.</p>
          </div>
        </div>
        <div className={styles.nav}>
          <FaBell className={styles.icon} title="Notifications" />
          <button className={styles.logoutButton}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </header>

      {/* Eco-Score and Progress Section */}
      <section className={styles.progress}>
        <div className={styles.ecoScore}>
          <h2>Your Eco-Score</h2>
          <div className={styles.circularProgress}>
            <p>{ecoScore}/100</p>
          </div>
        </div>
        <div className={styles.achievements}>
          <h3>Achievements</h3>
          <div className={styles.achievementBadges}>
            {achievements.map((achievement) => (
              <div key={achievement.id} className={styles.achievement}>
                {achievement.icon}
                <p>{achievement.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.points}>
          <h3>Your Points</h3>
          <p>{points}</p>
          <button className={styles.claimRewards}>Claim Rewards</button>
        </div>
      </section>

      {/* Activity History Section */}
      <section className={styles.activityHistory}>
        <h2>Activity History</h2>
        <ul className={styles.activityList}>
          {activityHistory.map((activity) => (
            <li key={activity.id} className={styles.activityItem}>
              {activity.action} <span>+{activity.points} points</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
