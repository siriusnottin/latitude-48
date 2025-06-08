import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menu.module.css';
import CoffeeCard from '../../../components/CoffeeCard';
import type { CoffeeItem } from '../../../components/CoffeeCard';

import santiagoCoffeeImage from '../../../assets/images/_DSC2868.webp?width=800';
import valparaisoCoffeeImage from '../../../assets/images/_DSC2914.webp?width=800';
import andesCoffeeImage from '../../../assets/images/_DSC3076.webp?width=800';

const ChiliMenu = () => {
  const coffees: CoffeeItem[] = [
    {
      number: '01',
      name: 'Santiago Blend',
      description:
        'A medium roast blend with notes of caramel, toasted nuts, and a subtle citrus finish.',
      price: '$4.75',
      image: santiagoCoffeeImage,
      details: {
        altitude: '1,200 - 1,500 meters',
        process: 'Washed',
        varietals: 'Typica, Caturra',
        cupping_notes: 'Caramel, Nuts, Citrus',
        roast_level: 'Medium',
      },
    },
    {
      number: '02',
      name: 'Valparaiso Special',
      description:
        'Light-medium roast featuring bright acidity with hints of chocolate and red berries.',
      price: '$5.00',
      image: valparaisoCoffeeImage,
      details: {
        altitude: '1,300 - 1,600 meters',
        process: 'Washed',
        varietals: 'Caturra, Catuai',
        cupping_notes: 'Chocolate, Red Berries, Bright',
        roast_level: 'Light-Medium',
      },
    },
    {
      number: '03',
      name: 'Andes High Grown',
      description:
        'Single-origin coffee from high-altitude farms, offering complex flavors of honey and stone fruit.',
      price: '$5.25',
      image: andesCoffeeImage,
      details: {
        altitude: '1,600 - 1,900 meters',
        process: 'Washed',
        varietals: 'Typica, Bourbon',
        cupping_notes: 'Honey, Stone Fruit, Complex',
        roast_level: 'Medium',
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Chilean Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/coffees/chili">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>CHILI</h2>
          <p className={styles.subtitle}>ALTURA ANDINA</p>

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

export default ChiliMenu;
