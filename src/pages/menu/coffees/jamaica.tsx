import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../../../styles/menuLayout.module.css';
import CoffeeCard from '../../../components/CoffeeCard';
import type { CoffeeItem } from '../../../components/CoffeeCard';

import jamaicaImage1 from '../../../assets/images/_DSC2868.webp?width=800';
import jamaicaImage2 from '../../../assets/images/_DSC2914.webp?width=800';
import jamaicaImage3 from '../../../assets/images/_DSC3076.webp?width=800';

const JamaicaMenu = () => {
  const coffees: CoffeeItem[] = [
    {
      number: '01',
      name: 'Blue Mountain',
      description: 'The legendary Jamaica Blue Mountain coffee, known for its smooth, clean taste with no bitter notes.',
      price: '$8.50',
      image: jamaicaImage1,
      details: {
        altitude: '1,500 - 1,800 meters',
        process: 'Washed',
        varietals: 'Typica',
        cupping_notes: 'Sweet, Clean, No Bitterness',
        roast_level: 'Medium'
      }
    },
    {
      number: '02',
      name: 'High Mountain Supreme',
      description: 'Perfectly balanced with a sweet flavor profile, featuring notes of chocolate and herbs.',
      price: '$7.75',
      image: jamaicaImage2,
      details: {
        altitude: '1,200 - 1,500 meters',
        process: 'Washed',
        varietals: 'Typica',
        cupping_notes: 'Chocolate, Herbs, Sweet',
        roast_level: 'Medium-Light'
      }
    },
    {
      number: '03',
      name: 'Wallenford Estate',
      description: 'Smooth and refined with a perfect balance of floral aroma and sweet flavor.',
      price: '$8.25',
      image: jamaicaImage3,
      details: {
        altitude: '1,400 - 1,700 meters',
        process: 'Washed',
        varietals: 'Typica',
        cupping_notes: 'Floral, Sweet, Refined',
        roast_level: 'Light-Medium'
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Jamaican Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/coffees/jamaica">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>JAMAICA</h2>
          <p className={styles.subtitle}>BLUE MOUNTAIN</p>

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

export default JamaicaMenu; 
