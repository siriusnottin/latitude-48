import { Helmet } from 'react-helmet-async';
import { getPageTitle } from '../utils/pageTitle';
import { HeroSection } from './_sections/HeroSection';
import { StorySection } from './_sections/StorySection';
import { ExperienceSection } from './_sections/ExperienceSection';
import styles from './index.module.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          {getPageTitle('Artisanal Coffee Experience', { inverted: true })}
        </title>
      </Helmet>

      <main className={styles.main}>
        <HeroSection />
        <StorySection />
        <ExperienceSection />
        {/* <MenuPreviewSection />
        <CTASection /> */}
      </main>
    </>
  );
};

export default Home;
