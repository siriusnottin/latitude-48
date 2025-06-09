import { AnimatedTextReveal } from '../_components/AnimatedTextReveal';
import styles from '../index.module.css';

import macchiatoImage1 from '../../assets/images/_DSC2865.webp?width=800';
import macchiatoImage2 from '../../assets/images/_DSC2926.webp?width=800';
import macchiatoImage3 from '../../assets/images/_DSC2711.webp?width=800';

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <AnimatedTextReveal
              as="h1"
              className={styles.heroTitle}
              duration={1.2}
            >
              Heritage
              <br />
              <span className="highlight">In Coffee</span>
            </AnimatedTextReveal>
            <AnimatedTextReveal as="p" className={styles.heroSubtitle}>
              A Journey Through Time and Taste
            </AnimatedTextReveal>
          </div>
          <div className={styles.heroImageGrid}>
            <img
              src={macchiatoImage1}
              alt="Coffee art"
              className={`${styles.heroImage} ${styles.image1}`}
            />
            <img
              src={macchiatoImage2}
              alt="Coffee preparation"
              className={`${styles.heroImage} ${styles.image2}`}
            />
            <img
              src={macchiatoImage3}
              alt="Coffee beans"
              className={`${styles.heroImage} ${styles.image3}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
