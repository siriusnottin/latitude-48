import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import { AnimatedTextReveal } from './_components/AnimatedTextReveal';
import ParallaxBeans from '../components/ParallaxBeans';
import FirstSection from '../components/FirstSection';

import styles from './index.module.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('Subtle. Roasted. Paris.', { inverted: true })}</title>
      </Helmet>
      <section className={styles['intro']}>
        <AnimatedTextReveal as="h1" className={styles['title']} stagger={true} duration={1.2} scrollTrigger={false}>
          FIND<br /> YOUR <span className={`${styles['highlight']} interactive`}>FAVE</span>
        </AnimatedTextReveal>
        <ParallaxBeans />
      </section>
      <main>
        <FirstSection />
      </main>
    </>
  );
};

export default Home;
