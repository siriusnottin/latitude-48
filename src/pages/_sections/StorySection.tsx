import styles from '../index.module.css';
import macchiatoImage2 from '../../assets/images/_DSC2932.webp?width=800';

export const StorySection = () => {
  return (
    <section className={styles.story}>
      <div className={styles.storyContent}>
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <h2 className={styles.sectionTitle}>
              Aromatic
              <br />
              Crossroads
            </h2>
            <p className={styles.storyDescription}>
              At Latitude 48, we're crafting more than coffee – we're creating
              moments. Our journey spans continents, from the misty highlands of
              Ethiopia to the volcanic soils of Guatemala, bringing you a
              curated selection of the world's finest beans.
            </p>
            <div className={styles.storyStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Origins</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1948</span>
                <span className={styles.statLabel}>Est.</span>
              </div>
            </div>
          </div>
          <div className={styles.storyImageContainer}>
            <img
              src={macchiatoImage2}
              alt="Coffee crafting"
              className={styles.storyImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
