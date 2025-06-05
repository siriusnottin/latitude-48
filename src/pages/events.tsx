import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import { AnimatedTextReveal } from './_components/AnimatedTextReveal';

const Events = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('Events')}</title>
      </Helmet>
      <main>
        <AnimatedTextReveal as="h1" scrollTrigger={false}>Events</AnimatedTextReveal>
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
