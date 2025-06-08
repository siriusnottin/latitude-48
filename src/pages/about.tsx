import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import { AnimatedTextReveal } from './_components/AnimatedTextReveal';
import { ContentGrid } from './_components/ContentGrid';
import styles from './about.module.css';

import heroImage from '../assets/images/_DSC2868.webp?width=1920';

const About = () => {
  const values = [
    {
      title: 'Sustainability',
      description:
        'We source our beans through direct trade partnerships, ensuring fair compensation for farmers and sustainable farming practices.',
    },
    {
      title: 'Community',
      description:
        "Our café is more than just a coffee shop—it's a gathering place for neighbors, artists, and coffee enthusiasts.",
    },
    {
      title: 'Quality',
      description:
        'From bean selection to brewing, we maintain rigorous standards to serve you the perfect cup every time.',
    },
  ];

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

      <ContentGrid values={values} />
    </>
  );
};

export default About;
