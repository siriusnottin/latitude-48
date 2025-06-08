import { Helmet } from 'react-helmet-async';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menu.module.css';
import CoffeeCard from '../../../components/CoffeeCard';
import type { CoffeeItem } from '../../../components/CoffeeCard';

import yirgacheffeImage from '../../../assets/images/_DSC2868.webp?width=800';
import sidamoImage from '../../../assets/images/_DSC3076.webp?width=800';
import gujiImage from '../../../assets/images/_DSC3076.webp?width=800';

const EthiopiaMenu = () => {
  const coffees: CoffeeItem[] = [
    {
      number: '01',
      name: 'Yirgacheffe',
      description:
        'A bright and complex coffee with floral notes, bergamot essence, and a delicate tea-like body.',
      price: '$5.25',
      image: yirgacheffeImage,
      details: {
        altitude: '1,750 - 2,200 meters',
        process: 'Washed',
        varietals: 'Heirloom Ethiopian',
        cupping_notes: 'Jasmine, Citrus, Honey',
        roast_level: 'Light-Medium',
      },
    },
    {
      number: '02',
      name: 'Sidamo',
      description:
        "Sweet and wine-like with notes of blueberry and dark chocolate, showcasing Ethiopia's finest.",
      price: '$5.50',
      image: sidamoImage,
      details: {
        altitude: '1,550 - 2,200 meters',
        process: 'Natural',
        varietals: 'Heirloom Ethiopian',
        cupping_notes: 'Blueberry, Dark Chocolate, Wine',
        roast_level: 'Medium',
      },
    },
    {
      number: '03',
      name: 'Guji',
      description:
        'Elegant and refined with jasmine, peach, and honey notes - a true Ethiopian masterpiece.',
      price: '$5.75',
      image: gujiImage,
      details: {
        altitude: '1,850 - 2,100 meters',
        process: 'Washed',
        varietals: 'Heirloom Ethiopian',
        cupping_notes: 'Peach, Jasmine, Honey',
        roast_level: 'Light',
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Ethiopian Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/coffees/ethiopia">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>ETHIOPIA</h2>
          <p className={styles.subtitle}>BIRTHPLACE OF COFFEE</p>

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

export default EthiopiaMenu;
