import { Helmet } from 'react-helmet-async';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menu.module.css';
import CoffeeCard from '../../../components/CoffeeCard';
import type { CoffeeItem } from '../../../components/CoffeeCard';

import costaRicaImage1 from '../../../assets/images/_DSC2868.webp?width=800';
import costaRicaImage2 from '../../../assets/images/_DSC2914.webp?width=800';
import costaRicaImage3 from '../../../assets/images/_DSC3076.webp?width=800';

const CostaRicaMenu = () => {
  const coffees: CoffeeItem[] = [
    {
      number: '01',
      name: 'Tarrazu Reserve',
      description:
        'Bright citrus notes and honey-like sweetness with a clean, crisp finish from the prestigious Tarrazu region.',
      price: '$5.75',
      image: costaRicaImage1,
      details: {
        altitude: '1,200 - 1,800 meters',
        process: 'Washed',
        varietals: 'Caturra, Catuai',
        cupping_notes: 'Citrus, Honey, Clean',
        roast_level: 'Medium',
      },
    },
    {
      number: '02',
      name: 'Monte Crisol',
      description:
        'Well-balanced with notes of chocolate, ripe berries, and a subtle hint of orange blossom.',
      price: '$5.50',
      image: costaRicaImage2,
      details: {
        altitude: '1,300 - 1,600 meters',
        process: 'Honey',
        varietals: 'Caturra, Villa Sarchi',
        cupping_notes: 'Chocolate, Berries, Orange Blossom',
        roast_level: 'Medium-Light',
      },
    },
    {
      number: '03',
      name: 'Tres Rios',
      description:
        'Smooth and mild with perfect acidity, featuring notes of vanilla, citrus, and a sweet caramel finish.',
      price: '$5.50',
      image: costaRicaImage3,
      details: {
        altitude: '1,200 - 1,650 meters',
        process: 'Washed',
        varietals: 'Caturra',
        cupping_notes: 'Vanilla, Citrus, Caramel',
        roast_level: 'Medium',
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Costa Rican Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/coffees/costa-rica">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>COSTA RICA</h2>
          <p className={styles.subtitle}>TARRAZU REGION</p>

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

export default CostaRicaMenu;
