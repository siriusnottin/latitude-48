import styles from '../index.module.css';
import macchiatoImage2 from '../../assets/images/_DSC2932.webp?width=800';
import { AnimatedTextReveal } from '../_components/AnimatedTextReveal';

export const StorySection = () => {
  return (
    <section className={styles.story}>
      <div className={styles.storyContent}>
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <AnimatedTextReveal as="h2" className={styles.sectionTitle}>
              Aromatic
              <br />
              <span className="highlight">Crossroads</span>
            </AnimatedTextReveal>
            <AnimatedTextReveal as="p" className={styles.storyDescription}>
              At Latitude 48, we're crafting more than coffee – we're creating
              moments. Our journey spans continents, from the misty highlands of
              Ethiopia to the volcanic soils of Guatemala, bringing you a
              curated selection of the world's finest beans.
            </AnimatedTextReveal>
            <div className={styles.storyStats}>
              <div className={styles.statItem}>
                <AnimatedTextReveal as="span" className={styles.statNumber}>
                  15+ Origins
                </AnimatedTextReveal>
              </div>
              <div className={styles.statItem}>
                <AnimatedTextReveal as="span" className={styles.statNumber}>
                  1948 Est.
                </AnimatedTextReveal>
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
