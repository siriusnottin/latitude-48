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
        <AnimatedTextReveal as="h1" scrollTrigger={false}>
          Cookies
        </AnimatedTextReveal>
        <p>Discover our delicious cookies selection!</p>
      </main>
    </div>
  );
};

export default Cookies;
