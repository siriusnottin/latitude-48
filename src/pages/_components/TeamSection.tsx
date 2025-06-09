import styles from '../about.module.css';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export const TeamSection = ({ teamMembers }: TeamSectionProps) => {
  return (
    <section
      className={`${styles.teamSection} ${styles.animate}`}
      style={{ animationDelay: '0.6s' }}
    >
      <h2>Meet Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            <div className={styles.teamMemberImage}>
              <img src={member.image} alt={member.name} />
            </div>
            <h3 className={styles.memberName}>{member.name}</h3>
            <span className={styles.memberRole}>{member.role}</span>
            <p className={styles.memberDescription}>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
