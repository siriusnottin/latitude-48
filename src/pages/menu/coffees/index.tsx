import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import { Link, type Path } from '../../../router';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menu.module.css';

type Origin = {
  name: string;
  subtitle: string;
  path: Path;
};

type CoffeeJourneyStep = {
  title: string;
  description: string;
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
      path: '/menu/coffees/brasil' as const
    },
    {
      name: 'ETHIOPIA',
      subtitle: 'YIRGACHEFFE',
      path: '/menu/coffees/ethiopia' as const
    },
    {
      name: 'COLOMBIA',
      subtitle: 'SIERRA NEVADA',
      path: '/menu/coffees/colombia' as const
    },
    {
      name: 'GUATEMALA',
      subtitle: 'ANTIGUA',
      path: '/menu/coffees/guatemala' as const
    },
    {
      name: 'COSTA RICA',
      subtitle: 'TARRAZU',
      path: '/menu/coffees/costa-rica' as const
    },
    {
      name: 'KENYA',
      subtitle: 'AA GRADE',
      path: '/menu/coffees/kenya' as const
    },
    {
      name: 'INDONESIA',
      subtitle: 'SUMATRA MANDHELING',
      path: '/menu/coffees/indonesia' as const
    },
    {
      name: 'JAMAICA',
      subtitle: 'BLUE MOUNTAIN',
      path: '/menu/coffees/jamaica' as const
    },
    {
      name: 'ITALIAN',
      subtitle: 'ESPRESSO BLEND',
      path: '/menu/coffees/italian' as const
    },
    {
      name: 'ARGENTINA',
      subtitle: 'BUENOS AIRES',
      path: '/menu/coffees/argentina' as const
    },
    {
      name: 'CHILI',
      subtitle: 'SANTIAGO',
      path: '/menu/coffees/chili' as const
    }
  ];

  const brewingMethods = [
    {
      title: 'Pour Over',
      description: 'A clean, crisp cup that highlights the coffee\'s subtle flavors'
    },
    {
      title: 'French Press',
      description: 'Full-bodied and rich with natural coffee oils'
    },
    {
      title: 'Espresso',
      description: 'Concentrated and intense, the foundation of many coffee drinks'
    }
  ];

  const journeySteps: CoffeeJourneyStep[] = [
    {
      title: 'Selection',
      description: 'We carefully select the finest coffee beans from sustainable farms around the world'
    },
    {
      title: 'Roasting',
      description: 'Our master roasters bring out the unique characteristics of each origin through precise roasting profiles'
    },
    {
      title: 'Quality Control',
      description: 'Rigorous testing ensures each batch meets our exacting standards'
    },
    {
      title: 'Brewing',
      description: 'Our baristas are trained in the art of coffee preparation to deliver the perfect cup'
    }
  ];

  const characteristics: CoffeeCharacteristic[] = [
    {
      name: 'Body',
      description: 'The weight and texture of the coffee on your palate',
      intensity: 4
    },
    {
      name: 'Acidity',
      description: 'The bright, tangy quality that adds life to the cup',
      intensity: 3
    },
    {
      name: 'Sweetness',
      description: 'Natural sugars that provide balance and depth',
      intensity: 4
    },
    {
      name: 'Aroma',
      description: 'The enticing fragrance that enhances the experience',
      intensity: 5
    }
  ];

  const seasonalSpecials = [
    {
      name: 'Winter Blend',
      description: 'Rich and warming with notes of dark chocolate and spice',
      available: true
    },
    {
      name: 'Spring Harvest',
      description: 'Light and floral with hints of citrus and jasmine',
      available: false
    }
  ];

  const renderIntensityDots = (intensity: number) => {
    return Array(5).fill(0).map((_, i) => (
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
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Our Coffee</h1>
              <p className={styles.heroSubtitle}>From Bean to Cup</p>
            </div>
          </section>

          <section>
            <h2 className={styles.pageTitle}>COFFEE ORIGINS</h2>
            <div className={styles.originsGrid}>
              {origins.map((origin, index) => (
                <Link key={index} to={origin.path} className={styles.originCard}>
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
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.experienceSection}>
            <h2 className={styles.pageTitle}>BREWING METHODS</h2>
            <div className={styles.methodsGrid}>
              {brewingMethods.map((method, index) => (
                <div key={index} className={styles.methodCard}>
                  <h3 className={styles.methodTitle}>{method.title}</h3>
                  <p className={styles.methodDescription}>{method.description}</p>
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
                  <p className={styles.characteristicDescription}>{char.description}</p>
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
                  <div className={styles.seasonalHeader}>
                    <h3 className={styles.seasonalName}>{special.name}</h3>
                    <span className={`${styles.seasonalStatus} ${special.available ? styles.available : styles.comingSoon}`}>
                      {special.available ? 'Available Now' : 'Coming Soon'}
                    </span>
                  </div>
                  <p className={styles.seasonalDescription}>{special.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.educationSection}>
            <h2 className={styles.pageTitle}>COFFEE EDUCATION</h2>
            <div className={styles.educationContent}>
              <p className={styles.educationText}>
                Coffee is more than just a beverage - it's an art form with a rich history and complex science behind every cup.
                Our coffee experts are passionate about sharing their knowledge and helping you discover the perfect brew for your palate.
              </p>
              <div className={styles.factGrid}>
                <div className={styles.factCard}>
                  <h4>Did You Know?</h4>
                  <p>Coffee beans are actually the seeds of coffee cherries, and they turn from green to brown during the roasting process.</p>
                </div>
                <div className={styles.factCard}>
                  <h4>Coffee Belt</h4>
                  <p>The world's finest coffees are grown in the "Bean Belt" - the region between the Tropics of Cancer and Capricorn.</p>
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
