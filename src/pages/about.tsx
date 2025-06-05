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
        <TextReveal as="h1">Aromatic Crossroads</TextReveal>
        <TextReveal as="p">Latitude48, a meeting point between terroir, craftsmanship, and precision. Each bean finds its ideal latitude.</TextReveal>
      </main>
    </>
  );
}

export default About;
