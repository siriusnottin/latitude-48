import { Helmet } from 'react-helmet-async';
import { getPageTitle } from '../../../utils/pageTitle';
import { Link, type Path } from '../../../router';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menuLayout.module.css';

// Import coffee images
import heroImage from '../../../assets/images/_DSC2808.webp';
import pourOverImage from '../../../assets/images/_DSC2914.webp';
import frenchPressImage from '../../../assets/images/_DSC2917.webp';
import espressoImage from '../../../assets/images/_DSC2920.webp';
import selectionImage from '../../../assets/images/_DSC2775.webp';
import roastingImage from '../../../assets/images/_DSC2780.webp';
import qualityImage from '../../../assets/images/_DSC2778.webp';
import brewingImage from '../../../assets/images/_DSC2774.webp';
import winterBlendImage from '../../../assets/images/_DSC2805.webp';
import springHarvestImage from '../../../assets/images/_DSC2828.webp';

type Origin = {
  name: string;
  subtitle: string;
  path: Path;
};

type CoffeeJourneyStep = {
  title: string;
  description: string;
  image: string;
  image: string;
};

type CoffeeCharacteristic = {
  name: string;
  description: string;
  intensity: number;
};

const CoffeesMenu = () => {
  const origins: Origin[] = [
    {
      name: 'BRASIL',
      subtitle: 'RITMO DO GRAO',
      path: '/menu/coffees/brasil' as const,
    },
    {
      name: 'ETHIOPIA',
      subtitle: 'YIRGACHEFFE',
      path: '/menu/coffees/ethiopia' as const,
    },
    {
      name: 'COLOMBIA',
      subtitle: 'SIERRA NEVADA',
      path: '/menu/coffees/colombia' as const,
    },
    {
      name: 'GUATEMALA',
      subtitle: 'ANTIGUA',
      path: '/menu/coffees/guatemala' as const,
    },
    {
      name: 'COSTA RICA',
      subtitle: 'TARRAZU',
      path: '/menu/coffees/costa-rica' as const,
    },
    {
      name: 'KENYA',
      subtitle: 'AA GRADE',
      path: '/menu/coffees/kenya' as const,
    },
    {
      name: 'INDONESIA',
      subtitle: 'SUMATRA MANDHELING',
      path: '/menu/coffees/indonesia' as const,
    },
    {
      name: 'JAMAICA',
      subtitle: 'BLUE MOUNTAIN',
      path: '/menu/coffees/jamaica' as const,
    },
    {
      name: 'ITALIAN',
      subtitle: 'ESPRESSO BLEND',
      path: '/menu/coffees/italian' as const,
    },
    {
      name: 'ARGENTINA',
      subtitle: 'BUENOS AIRES',
      path: '/menu/coffees/argentina' as const,
    },
    {
      name: 'CHILI',
      subtitle: 'SANTIAGO',
      path: '/menu/coffees/chili' as const,
    },
  ];

  const brewingMethods = [
    {
      title: 'Pour Over',
      description:
        "A clean, crisp cup that highlights the coffee's subtle flavors",
      image: pourOverImage,
    },
    {
      title: 'French Press',
      description: 'Full-bodied and rich with natural coffee oils',
      image: frenchPressImage,
    },
    {
      title: 'Espresso',
      description:
        'Concentrated and intense, the foundation of many coffee drinks',
      image: espressoImage,
    },
  ];

  const journeySteps: CoffeeJourneyStep[] = [
    {
      title: 'Selection',
      description:
        'We carefully select the finest coffee beans from sustainable farms around the world',
      image: selectionImage,
    },
    {
      title: 'Roasting',
      description:
        'Our master roasters bring out the unique characteristics of each origin through precise roasting profiles',
      image: roastingImage,
    },
    {
      title: 'Quality Control',
      description:
        'Rigorous testing ensures each batch meets our exacting standards',
      image: qualityImage,
    },
    {
      title: 'Brewing',
      description:
        'Our baristas are trained in the art of coffee preparation to deliver the perfect cup',
      image: brewingImage,
    },
  ];

  const characteristics: CoffeeCharacteristic[] = [
    {
      name: 'Body',
      description: 'The weight and texture of the coffee on your palate',
      intensity: 4,
    },
    {
      name: 'Acidity',
      description: 'The bright, tangy quality that adds life to the cup',
      intensity: 3,
    },
    {
      name: 'Sweetness',
      description: 'Natural sugars that provide balance and depth',
      intensity: 4,
    },
    {
      name: 'Aroma',
      description: 'The enticing fragrance that enhances the experience',
      intensity: 5,
    },
  ];

  const seasonalSpecials = [
    {
      name: 'Winter Blend',
      description: 'Rich and warming with notes of dark chocolate and spice',
      available: true,
      image: winterBlendImage,
    },
    {
      name: 'Spring Harvest',
      description: 'Light and floral with hints of citrus and jasmine',
      available: false,
      image: springHarvestImage,
    },
  ];

  const renderIntensityDots = (intensity: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={`${styles.intensityDot} ${i < intensity ? styles.active : ''}`}
        />
      ));
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Coffee Menu')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/coffees">
        <div className={styles.menuContainer}>
          <section className={styles.heroSection}>
            <div
              className={styles.heroBackground}
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Our Coffee</h1>
              <p className={styles.heroSubtitle}>From Bean to Cup</p>
            </div>
          </section>

          <section>
            <h2 className={styles.pageTitle}>COFFEE ORIGINS</h2>
            <div className={styles.originsGrid}>
              {origins.map((origin, index) => (
                <Link
                  key={index}
                  to={origin.path}
                  className={styles.originCard}
                >
                  <h3 className={styles.originTitle}>{origin.name}</h3>
                  <p className={styles.subtitle}>{origin.subtitle}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.journeySection}>
            <h2 className={styles.pageTitle}>OUR COFFEE JOURNEY</h2>
            <div className={styles.journeyGrid}>
              {journeySteps.map((step, index) => (
                <div key={index} className={styles.journeyStep}>
                  <div className={styles.journeyImageWrapper}>
                    <img
                      src={step.image}
                      alt={step.title}
                      className={styles.journeyImage}
                    />
                  </div>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.experienceSection}>
            <h2 className={styles.pageTitle}>BREWING METHODS</h2>
            <div className={styles.methodsGrid}>
              {brewingMethods.map((method, index) => (
                <div key={index} className={styles.methodCard}>
                  <div className={styles.methodImageWrapper}>
                    <img
                      src={method.image}
                      alt={method.title}
                      className={styles.methodImage}
                    />
                  </div>
                  <h3 className={styles.methodTitle}>{method.title}</h3>
                  <p className={styles.methodDescription}>
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.characteristicsSection}>
            <h2 className={styles.pageTitle}>COFFEE CHARACTERISTICS</h2>
            <div className={styles.characteristicsGrid}>
              {characteristics.map((char, index) => (
                <div key={index} className={styles.characteristicCard}>
                  <h3 className={styles.characteristicName}>{char.name}</h3>
                  <p className={styles.characteristicDescription}>
                    {char.description}
                  </p>
                  <div className={styles.intensityMeter}>
                    {renderIntensityDots(char.intensity)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.seasonalSection}>
            <h2 className={styles.pageTitle}>SEASONAL SPECIALS</h2>
            <div className={styles.seasonalGrid}>
              {seasonalSpecials.map((special, index) => (
                <div key={index} className={styles.seasonalCard}>
                  <div className={styles.seasonalImageWrapper}>
                    <img
                      src={special.image}
                      alt={special.name}
                      className={styles.seasonalImage}
                    />
                  </div>
                  <div className={styles.seasonalHeader}>
                    <h3 className={styles.seasonalName}>{special.name}</h3>
                    <span
                      className={`${styles.seasonalStatus} ${special.available ? styles.available : styles.comingSoon}`}
                    >
                      {special.available ? 'Available Now' : 'Coming Soon'}
                    </span>
                  </div>
                  <p className={styles.seasonalDescription}>
                    {special.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.educationSection}>
            <h2 className={styles.pageTitle}>COFFEE EDUCATION</h2>
            <div className={styles.educationContent}>
              <p className={styles.educationText}>
                Coffee is more than just a beverage - it's an art form with a
                rich history and complex science behind every cup. Our coffee
                experts are passionate about sharing their knowledge and helping
                you discover the perfect brew for your palate.
              </p>
              <div className={styles.factGrid}>
                <div className={styles.factCard}>
                  <h4>Did You Know?</h4>
                  <p>
                    Coffee beans are actually the seeds of coffee cherries, and
                    they turn from green to brown during the roasting process.
                  </p>
                </div>
                <div className={styles.factCard}>
                  <h4>Coffee Belt</h4>
                  <p>
                    The world's finest coffees are grown in the "Bean Belt" -
                    the region between the Tropics of Cancer and Capricorn.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </MenuLayout>
    </>
  );
};

export default CoffeesMenu;
