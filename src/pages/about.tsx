import { Helmet } from 'react-helmet-async';
import { getPageTitle } from '../utils/pageTitle';
import TextReveal from './_components/TextReveal';
import styles from './about.module.css';

const imagesName = ['_DSC3227', '_DSC2850', '_DSC3182', '_DSC2703'];

const images = imagesName.map(
  (name) =>
    import.meta.glob('../assets/images/*.webp', {
      eager: true,
      query: '?width=800',
      import: 'default',
    })[`../assets/images/${name}.webp`] as string
);

const About = () => {
  return (
    <main className={styles.main}>
      <Helmet defer={false}>
        <title>{getPageTitle('About')}</title>
      </Helmet>

      <section className={styles.firstSection}>
        <div className={styles.left}>
          <div className={styles.image1Wrapper}>
            <img src={images[0]} alt="Latitude 48 café interior view" />
            <TextReveal as="h1" className={styles.title}>
              Our
              <br />
              <span className={styles.highlight}>Story</span>
            </TextReveal>
          </div>
          <TextReveal
            as="p"
            className={`${styles.subtitle} ${styles.text}`}
            delay={0.2}
          >
            <b>Latitude48</b>, a meeting point between terroir,
            <br />
            craftsmanship, and precision.
            <br />
            Each bean finds its ideal latitude.
          </TextReveal>
        </div>
        <div className={styles.right}>
          <div className={styles.image2Wrapper}>
            <img src={images[1]} alt="Latte art being poured" />
          </div>
        </div>
      </section>

      <section className={styles.secondSection}>
        <TextReveal as="p" className={styles.text}>
          Here, we select, roast, and craft our blends — <br />
          in a place both discreet and defining, where every detail matters.
        </TextReveal>
      </section>

      <section className={styles.thirdSection}>
        <TextReveal as="p" className={styles.text}>
          Latitude48 is a workshop of taste,
          <br />a haven for those who see coffee as a way of life.
        </TextReveal>
        <div className={styles.image3Wrapper}>
          <img src={images[2]} alt="Pastry display case" />
        </div>
      </section>

      <section className={styles.fourthSection}>
        <div className={styles.image4Wrapper}>
          <img src={images[3]} alt="Matcha tea preparation" />
        </div>
        <TextReveal as="p" className={styles.text}>
          Our commitment to quality extends beyond the bean.
          <br />
          We meticulously control every stage of the process, from sourcing to
          roasting, ensuring that each cup delivers an unparalleled experience.
        </TextReveal>
      </section>
    </main>
  );
};

export default About;
