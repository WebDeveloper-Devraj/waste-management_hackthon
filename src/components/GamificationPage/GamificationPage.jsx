import React from "react";
import styles from "./GamificationPage.module.css";

const GamificationPage = () => {
  const users = [
    { rank: 1, name: "Alice", points: 1500 },
    { rank: 2, name: "Bob", points: 1300 },
    { rank: 3, name: "Charlie", points: 1200 },
  ];

  const communities = [
    { rank: 1, name: "Green Warriors", impact: "300kg waste recycled" },
    { rank: 2, name: "Eco Crusaders", impact: "200kg waste recycled" },
    { rank: 3, name: "Nature Savers", impact: "150kg waste recycled" },
  ];

  const rewards = [
    { name: "Bronze Badge", pointsNeeded: 500, userPoints: 450 },
    { name: "Silver Badge", pointsNeeded: 1000, userPoints: 800 },
    { name: "Gold Badge", pointsNeeded: 2000, userPoints: 1500 },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gamification & Leaderboard</h1>

      {/* Leaderboard Section */}
      <div className={styles.leaderboardSection}>
        <h2>Top Users</h2>
        <table className={styles.leaderboardTable}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.rank}>
                <td>{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Top Communities</h2>
        <table className={styles.leaderboardTable}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Community</th>
              <th>Impact</th>
            </tr>
          </thead>
          <tbody>
            {communities.map((community) => (
              <tr key={community.rank}>
                <td>{community.rank}</td>
                <td>{community.name}</td>
                <td>{community.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Progress Section */}
      <div className={styles.progressSection}>
        <h2>Your Rewards Progress</h2>
        {rewards.map((reward, index) => (
          <div key={index} className={styles.reward}>
            <h3>{reward.name}</h3>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{
                  width: `${(reward.userPoints / reward.pointsNeeded) * 100}%`,
                }}
              />
            </div>
            <p>
              {reward.userPoints}/{reward.pointsNeeded} Points
            </p>
          </div>
        ))}
      </div>

      {/* Challenges Section */}
      <div className={styles.challengesSection}>
        <h2>Ongoing Challenges</h2>
        <ul className={styles.challengesList}>
          <li>Participate in a community cleanup drive this weekend.</li>
          <li>Report 5 waste sites in your neighborhood.</li>
          <li>Plant 3 trees and upload proof.</li>
        </ul>
      </div>

      {/* Community Impact */}
      <div className={styles.impactSection}>
        <h2>Community Impact</h2>
        <p>
          Collectively, users have recycled over 10,000kg of waste this month!
        </p>
      </div>
    </div>
  );
};

export default GamificationPage;
