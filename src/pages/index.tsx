import { Helmet } from 'react-helmet-async';
import { getPageTitle } from '../utils/pageTitle';
import { HeroSection } from './_sections/HeroSection';
import { StorySection } from './_sections/StorySection';
import { ExperienceSection } from './_sections/ExperienceSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          {getPageTitle('Artisanal Coffee Experience', { inverted: true })}
        </title>
      </Helmet>

      <HeroSection />
      <StorySection />
      <ExperienceSection />
      {/* <MenuPreviewSection />
      <CTASection /> */}
    </>
  );
};

export default Home;
