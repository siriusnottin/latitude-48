import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import { AnimatedTextReveal } from './_components/AnimatedTextReveal';
import ParallaxBeans from '../components/ParallaxBeans';
import styles from './index.module.css';

// Import images
import macchiatoImage1 from '../assets/images/_DSC2868.jpg?w=800&webp&img';
import macchiatoImage2 from '../assets/images/_DSC2914.jpg?w=800&webp&img';
import macchiatoImage3 from '../assets/images/_DSC3076.jpg?w=800&webp&img';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('Artisanal Coffee Experience', { inverted: true })}</title>
      </Helmet>

      {/* Hero Section */}
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

      {/* Story Section */}
      <section className={styles.story}>
        <div className={styles.storyContent}>
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <h2 className={styles.sectionTitle}>Aromatic<br />Crossroads</h2>
              <p className={styles.storyDescription}>
                At Latitude 48, we're crafting more than coffee – we're creating moments. 
                Our journey spans continents, from the misty highlands of Ethiopia to the 
                volcanic soils of Guatemala, bringing you a curated selection of the world's 
                finest beans.
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
              <img src={macchiatoImage2} alt="Coffee crafting" className={styles.storyImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
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

      {/* Menu Preview */}
      <section className={styles.menuPreview}>
        <div className={styles.menuContent}>
          <h2 className={styles.menuTitle}>World<br />Hop Aboard</h2>
          <div className={styles.menuGrid}>
            <div className={styles.menuItem}>
              <span className={styles.menuRegion}>Brasil</span>
              <h3>Ritmo do Grão</h3>
              <p>Notes of chocolate & nuts</p>
            </div>
            <div className={styles.menuItem}>
              <span className={styles.menuRegion}>Ethiopia</span>
              <h3>Yirgacheffe</h3>
              <p>Floral & citrus notes</p>
            </div>
            <div className={styles.menuItem}>
              <span className={styles.menuRegion}>Colombia</span>
              <h3>Alto del Obispo</h3>
              <p>Caramel & red fruits</p>
            </div>
          </div>
          <a href="/menu" className={styles.menuButton}>
            Explore Menu
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Begin Your<br />Journey
          </h2>
          <p className={styles.ctaText}>
            Every cup tells a story. What's yours?
          </p>
          <a href="/menu" className={styles.ctaButton}>
            Get Your Coffee
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
