import { Helmet } from 'react-helmet-async';
import { getPageTitle } from '../utils/pageTitle';
import { AnimatedTextReveal } from './_components/AnimatedTextReveal';
import { TeamSection } from './_components/TeamSection';
import styles from './about.module.css';

import heroImage from '../assets/images/_DSC2868.webp?width=1920';

const About = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('About')}</title>
      </Helmet>

      <section className={`${styles.heroSection} ${styles.animate}`}>
        <div className={styles.heroImage}>
          <img src={heroImage} alt="Latitude 48 café interior" />
        </div>
        <AnimatedTextReveal
          as="h1"
          scrollTrigger={false}
          className={styles.title}
        >
          Our Story
        </AnimatedTextReveal>
        <AnimatedTextReveal
          as="p"
          scrollTrigger={false}
          className={styles.subtitle}
        >
          Crafting exceptional coffee experiences at the 48th parallel
        </AnimatedTextReveal>
      </section>
    </>
  );
};

export default About;
