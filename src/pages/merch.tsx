import { Helmet } from 'react-helmet-async';
import { getPageTitle } from '../utils/pageTitle';
import { AnimatedTextReveal } from './_components/AnimatedTextReveal';

const Merch = () => {
  return (
    <div className="container">
      <Helmet>
        <title>{getPageTitle('Merch')}</title>
      </Helmet>
      <main>
        <AnimatedTextReveal as="h1">Merchandise</AnimatedTextReveal>
        <p>Check out our exclusive merchandise!</p>
        <ul>
          <li>Logo T-Shirt - $20</li>
          <li>Coffee Mug - $12</li>
          <li>Tote Bag - $15</li>
        </ul>
      </main>
    </div>
  );
};

export default Merch;
