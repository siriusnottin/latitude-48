import { AnimatedTextReveal } from '../_components/AnimatedTextReveal';
import ParallaxBeans from '../../components/ParallaxBeans';
import styles from '../index.module.css';

import macchiatoImage1 from '../../assets/images/_DSC2868.webp?width=800';
import macchiatoImage2 from '../../assets/images/_DSC2914.webp?width=800';
import macchiatoImage3 from '../../assets/images/_DSC3076.webp?width=800';

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <AnimatedTextReveal as="h1" className={styles.heroTitle} duration={1.2} scrollTrigger={false}>
              Heritage<br /><span className={styles.highlight}>In Coffee</span>
            </AnimatedTextReveal>
            <p className={styles.heroSubtitle}>
              A Journey Through Time and Taste
            </p>
          </div>
          <div className={styles.heroImageGrid}>
            <img src={macchiatoImage1} alt="Coffee art" className={`${styles.heroImage} ${styles.image1}`} />
            <img src={macchiatoImage2} alt="Coffee preparation" className={`${styles.heroImage} ${styles.image2}`} />
            <img src={macchiatoImage3} alt="Coffee beans" className={`${styles.heroImage} ${styles.image3}`} />
          </div>
        </div>
        <ParallaxBeans />
      </div>
    </section>
  );
}; 
