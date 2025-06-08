import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menu.module.css';
import CoffeeCard from '../../../components/CoffeeCard';
import type { CoffeeItem } from '../../../components/CoffeeCard';

import guatemalaImage1 from '../../../assets/images/_DSC2868.webp?width=800';
import guatemalaImage2 from '../../../assets/images/_DSC2914.webp?width=800';
import guatemalaImage3 from '../../../assets/images/_DSC3076.webp?width=800';

const GuatemalaMenu = () => {
  const coffees: CoffeeItem[] = [
    {
      number: '01',
      name: 'Antigua Valley',
      description:
        'Elegant complexity from volcanic soils with floral aromas, subtle spiciness, and rich chocolate undertones.',
      price: '$5.50',
      image: guatemalaImage1,
      details: {
        altitude: '1,500 - 1,700 meters',
        process: 'Washed',
        varietals: 'Bourbon, Caturra, Catuai',
        cupping_notes: 'Chocolate, Floral, Spice',
        roast_level: 'Medium',
      },
    },
    {
      number: '02',
      name: 'Huehuetenango',
      description:
        'High-altitude grown with bright acidity, full body, and distinctive notes of honey and citrus fruit.',
      price: '$5.75',
      image: guatemalaImage2,
      details: {
        altitude: '1,800 - 2,000 meters',
        process: 'Washed',
        varietals: 'Bourbon, Caturra',
        cupping_notes: 'Honey, Citrus, Apple',
        roast_level: 'Medium-Light',
      },
    },
    {
      number: '03',
      name: 'Atitlan',
      description:
        'Complex and full-bodied with notes of dark chocolate, caramel, and subtle hints of spice.',
      price: '$5.50',
      image: guatemalaImage3,
      details: {
        altitude: '1,500 - 1,800 meters',
        process: 'Washed',
        varietals: 'Bourbon, Typica',
        cupping_notes: 'Dark Chocolate, Caramel, Spice',
        roast_level: 'Medium-Dark',
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Guatemalan Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/coffees/guatemala">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>GUATEMALA</h2>
          <p className={styles.subtitle}>ANTIGUA VALLEY</p>

          <div className={styles.coffeeGrid}>
            {coffees.map((coffee, index) => (
              <CoffeeCard key={index} coffee={coffee} />
            ))}
          </div>
        </div>
      </MenuLayout>
    </>
  );
};

export default GuatemalaMenu;
