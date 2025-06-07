import styles from '../index.module.css';
import macchiatoImage1 from '../../assets/images/_DSC2868.webp?width=800';
import macchiatoImage2 from '../../assets/images/_DSC2914.webp?width=800';
import macchiatoImage3 from '../../assets/images/_DSC3076.webp?width=800';

export const ExperienceSection = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.experienceContent}>
        <h2 className={styles.experienceTitle}>
          Let Your<br />
          <span className={styles.highlight}>Senses</span><br />
          Travel
        </h2>
        <div className={styles.experienceGrid}>
          {[macchiatoImage1, macchiatoImage2, macchiatoImage3].map((image, index) => (
            <div key={index} className={styles.experienceItem}>
              <img src={image} alt={`Coffee experience ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
