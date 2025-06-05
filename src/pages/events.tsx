import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import TextReveal from './_components/TextReveal';

const Events = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('Events')}</title>
      </Helmet>
      <main>
        <TextReveal as="h1">Events</TextReveal>
        <p>Check out our upcoming events!</p>
        <ul>
          <li>Coffee Tasting - March 15, 2024</li>
          <li>Barista Workshop - April 20, 2024</li>
          <li>Live Music Night - May 5, 2024</li>
        </ul>
      </main>
    </>
  );
}

export default Events;
