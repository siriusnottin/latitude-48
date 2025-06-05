import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../utils/pageTitle';
import { AnimatedTextReveal } from '../_components/AnimatedTextReveal';

const MenuPage = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('Menu')}</title>
      </Helmet>
      <main>
        <AnimatedTextReveal as="h1" scrollTrigger={false}>Menu</AnimatedTextReveal>
        <p>Welcome to our menu page. Please check back soon for updates!</p>
      </main>
    </>
  );
};

export default MenuPage;
