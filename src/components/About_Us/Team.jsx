import { useSelector } from "react-redux";
import styles from "./AboutUs.module.css";
import TeamMember from "./TeamMember";

const Team = () => {
  const members = useSelector((store) => store.members);

  return (
    <section className={styles.teamSection}>
      <h2>Meet the Team</h2>
      <div className={styles.teamMembers}>
        {members.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
