import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import { HeroSection } from './_sections/HeroSection';
import { StorySection } from './_sections/StorySection';
import { ExperienceSection } from './_sections/ExperienceSection';
import { MenuPreviewSection } from './_sections/MenuPreviewSection';
import { CTASection } from './_sections/CTASection';
import { TestSection } from './_sections/TestSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('Artisanal Coffee Experience', { inverted: true })}</title>
      </Helmet>

      <HeroSection />
      <StorySection />
      <TestSection />
      <ExperienceSection />
      <MenuPreviewSection />
      <CTASection />
    </>
  );
};

export default Home;
