import { Helmet } from 'react-helmet-async';
import { getPageTitle } from '../../../utils/pageTitle';
import TextReveal from '../../_components/TextReveal';

const Cookies = () => {
  return (
    <div className="container">
      <Helmet defer={false}>
        <title>{getPageTitle('Cookies')}</title>
      </Helmet>
      <main>
        <TextReveal as="h1">Cookies</TextReveal>
        <p>Discover our delicious cookies selection!</p>
      </main>
    </div>
  );
};

export default Cookies;
