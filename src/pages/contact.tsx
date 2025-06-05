import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import TextReveal from './_components/TextReveal';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('Contact')}</title>
      </Helmet>
      <main>
        <TextReveal as="h1">Want to say hello?</TextReveal>
        {/* <TextReveal as="p">We'd love to hear from you! Whether you have a question, feedback, or just want to chat, feel free to reach out.</TextReveal> */}
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

export default Contact;
