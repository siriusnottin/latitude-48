import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import TextReveal from './_components/TextReveal';

const Merch = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('Merch')}</title>
      </Helmet>
      <main>
        <TextReveal as="h1">Merchandise</TextReveal>
        <p>Check out our exclusive merchandise!</p>
        <ul>
          <li>Logo T-Shirt - $20</li>
          <li>Coffee Mug - $12</li>
          <li>Tote Bag - $15</li>
        </ul>
      </main>
    </>
  );
}

export default Merch;
