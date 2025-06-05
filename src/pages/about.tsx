import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import TextReveal from './_components/TextReveal';

const About = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('About')}</title>
      </Helmet>
      <main>
        <TextReveal as="h1">About Us</TextReveal>
        <p>Welcome to our coffee shop! We are passionate about serving the best coffee in town.</p>
        <p>Our team is dedicated to providing a warm and inviting atmosphere for all our customers.</p>
        <p>Come visit us and enjoy a cup of our finest brew!</p>
      </main>
    </>
  );
}

export default About;
