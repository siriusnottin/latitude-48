import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../../../styles/menuLayout.module.css';
import CoffeeCard from '../../../components/CoffeeCard';
import type { CoffeeItem } from '../../../components/CoffeeCard';

import indonesiaImage1 from '../../../assets/images/_DSC2868.webp?width=800';
import indonesiaImage2 from '../../../assets/images/_DSC2914.webp?width=800';
import indonesiaImage3 from '../../../assets/images/_DSC3076.webp?width=800';

const IndonesiaMenu = () => {
  const coffees: CoffeeItem[] = [
    {
      number: '01',
      name: 'Sumatra Mandheling',
      description: 'Full-bodied Indonesian coffee with rich, earthy flavors and hints of wood and dark chocolate.',
      price: '$5.50',
      image: indonesiaImage1,
      details: {
        altitude: '900 - 1,500 meters',
        process: 'Wet-Hulled',
        varietals: 'Typica, Catimor',
        cupping_notes: 'Earth, Wood, Dark Chocolate',
        roast_level: 'Dark'
      }
    },
    {
      number: '02',
      name: 'Java Estate',
      description: 'Heavy-bodied with a smooth, syrupy consistency and notes of herbs and dark cocoa.',
      price: '$5.75',
      image: indonesiaImage2,
      details: {
        altitude: '1,000 - 1,600 meters',
        process: 'Washed',
        varietals: 'Typica, S795',
        cupping_notes: 'Herbs, Dark Cocoa, Syrup',
        roast_level: 'Medium-Dark'
      }
    },
    {
      number: '03',
      name: 'Sulawesi Toraja',
      description: 'Well-balanced with a clean, sweet finish featuring notes of spice and dark fruits.',
      price: '$5.75',
      image: indonesiaImage3,
      details: {
        altitude: '1,400 - 1,800 meters',
        process: 'Wet-Hulled',
        varietals: 'Typica, S795, Catimor',
        cupping_notes: 'Spice, Dark Fruits, Sweet',
        roast_level: 'Medium'
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Indonesian Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/coffees/indonesia">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>INDONESIA</h2>
          <p className={styles.subtitle}>SUMATRA MANDHELING</p>

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

export default IndonesiaMenu; 
