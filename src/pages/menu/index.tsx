import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../utils/pageTitle';
import TextReveal from '../_components/TextReveal';

const MenuPage = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('Menu')}</title>
      </Helmet>
      <main>
        <TextReveal as="h1">Menu</TextReveal>
        <p>Welcome to our menu page. Please check back soon for updates!</p>
      </main>
    </>
  );
};

export default MenuPage;
