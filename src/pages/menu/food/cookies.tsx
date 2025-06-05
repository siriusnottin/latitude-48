import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import TextReveal from '../../_components/TextReveal';

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('Cookies')}</title>
      </Helmet>
      <main>
        <TextReveal as="h1">Cookies</TextReveal>
        <p>Discover our delicious cookies selection!</p>
      </main>
    </>
  );
};

export default Cookies;
