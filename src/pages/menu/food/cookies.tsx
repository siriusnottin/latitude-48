import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import { AnimatedTextReveal } from '../../_components/AnimatedTextReveal';

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('Cookies')}</title>
      </Helmet>
      <main>
        <AnimatedTextReveal as="h1" scrollTrigger={false}>Cookies</AnimatedTextReveal>
        <p>Discover our delicious cookies selection!</p>
      </main>
    </>
  );
};

export default Cookies;
