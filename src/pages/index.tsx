import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import TextReveal from './_components/TextReveal';
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
        <TextReveal as="h1" className={styles['title']} stagger={true} duration={1.2} delay={0.2}>
          FIND<br /> YOUR <span className={`${styles['highlight']} interactive`}>FAVE</span>
        </TextReveal>
        <ParallaxBeans />
      </section>
      <main>
        <FirstSection />
      </main>
    </>
  );
};

export default Home;
