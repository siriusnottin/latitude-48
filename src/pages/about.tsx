import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import { AnimatedTextReveal } from './_components/AnimatedTextReveal';
import { TeamSection } from './_components/TeamSection';
import styles from './about.module.css';

import heroImage from '../assets/images/_DSC2868.webp?width=1920';
import storyImage from '../assets/images/_DSC2808.webp?width=800';
import atmosphereImage from '../assets/images/_DSC2914.webp?width=800';
import teamImage1 from '../assets/images/_DSC3227.webp?width=600';
import teamImage2 from '../assets/images/_DSC3190.webp?width=600';
import teamImage3 from '../assets/images/_DSC3189.webp?width=600';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Founder & Head Roaster',
      description:
        "With over 15 years of experience in specialty coffee, Sarah's passion for the perfect roast drives our commitment to quality.",
      image: teamImage1,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head Barista',
      description:
        'A certified Q-grader with a background in coffee education, Marcus leads our barista training program and quality control.',
      image: teamImage2,
    },
    {
      name: 'Emma Thompson',
      role: 'Café Manager',
      description:
        'Emma ensures every visit to Latitude 48 is memorable, bringing her hospitality expertise and warm personality to our daily operations.',
      image: teamImage3,
    },
  ];

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
      <main className={styles.aboutContainer}>
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

        <div className={styles.contentGrid}>
          <div
            className={`${styles.storySection} ${styles.animate}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className={styles.storyImage}>
              <img src={storyImage} alt="Coffee roasting process" />
            </div>
            <h2>The Journey</h2>
            <p>
              Founded in 2018, Latitude 48 began with a simple mission: to
              create a space where coffee, community, and culture intersect. Our
              name draws inspiration from the 48th parallel north, where some of
              the world's finest coffee beans are grown.
            </p>
            <p>
              What started as a small coffee cart has grown into a beloved
              neighborhood destination, where every cup tells a story and every
              visitor becomes part of our extended family.
            </p>
          </div>

          <div
            className={`${styles.atmosphereSection} ${styles.animate}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className={styles.atmosphereImage}>
              <img src={atmosphereImage} alt="Café atmosphere" />
            </div>
            <h2>Our Values</h2>
            <div className={styles.valuesList}>
              {values.map((value, index) => (
                <div key={index} className={styles.valueCard}>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <TeamSection teamMembers={teamMembers} />
      </main>
    </>
  );
};

export default About;
