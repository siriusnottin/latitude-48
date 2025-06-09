import { Helmet } from 'react-helmet-async';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menu.module.css';
import CoffeeCard from '../../../components/CoffeeCard';
import type { CoffeeItem } from '../../../components/CoffeeCard';

import colombiaImage1 from '../../../assets/images/_DSC2868.webp?width=800';
import colombiaImage2 from '../../../assets/images/_DSC2914.webp?width=800';
import colombiaImage3 from '../../../assets/images/_DSC3076.webp?width=800';

const ColombiaMenu = () => {
  const coffees: CoffeeItem[] = [
    {
      number: '01',
      name: 'Sierra Nevada',
      description:
        'A perfectly balanced coffee with bright citrus notes, caramel sweetness, and a smooth chocolate finish.',
      price: '$5.25',
      image: colombiaImage1,
      details: {
        altitude: '1,600 - 2,000 meters',
        process: 'Washed',
        varietals: 'Caturra, Colombia',
        cupping_notes: 'Citrus, Caramel, Chocolate',
        roast_level: 'Medium',
      },
    },
    {
      number: '02',
      name: 'Huila Reserve',
      description:
        'Complex and full-bodied with notes of red fruits, brown sugar, and a wine-like acidity.',
      price: '$5.50',
      image: colombiaImage2,
      details: {
        altitude: '1,500 - 1,900 meters',
        process: 'Washed',
        varietals: 'Castillo, Caturra',
        cupping_notes: 'Red Fruits, Brown Sugar, Wine',
        roast_level: 'Medium-Light',
      },
    },
    {
      number: '03',
      name: 'Medellin Supremo',
      description:
        'Sweet and aromatic with hints of tropical fruit, vanilla, and a clean, bright finish.',
      price: '$5.25',
      image: colombiaImage3,
      details: {
        altitude: '1,700 - 2,100 meters',
        process: 'Washed',
        varietals: 'Colombia, Typica',
        cupping_notes: 'Tropical Fruit, Vanilla, Clean',
        roast_level: 'Medium',
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Colombian Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/coffees/colombia">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>COLOMBIA</h2>
          <p className={styles.subtitle}>SIERRA NEVADA</p>

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

export default ColombiaMenu;
