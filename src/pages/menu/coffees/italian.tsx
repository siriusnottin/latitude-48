import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../../../styles/menuLayout.module.css';
import CoffeeCard from '../../../components/CoffeeCard';
import type { CoffeeItem } from '../../../components/CoffeeCard';

import espressoImage from '../../../assets/images/_DSC2868.webp?width=800';
import cappuccinoImage from '../../../assets/images/_DSC2914.webp?width=800';
import latteImage from '../../../assets/images/_DSC3076.webp?width=800';

const ItalianMenu = () => {
  const coffees: CoffeeItem[] = [
    {
      number: '01',
      name: 'Espresso Romano',
      description: 'A classic Italian espresso served with a twist of lemon peel, highlighting the coffee\'s bright notes and adding a citrusy aroma.',
      price: '$3.75',
      image: espressoImage,
      details: {
        altitude: 'Various',
        process: 'Various',
        varietals: 'Arabica Blend',
        cupping_notes: 'Citrus, Dark Chocolate, Caramel',
        roast_level: 'Dark'
      }
    },
    {
      number: '02',
      name: 'Cappuccino Tradizionale',
      description: 'Perfect balance of rich espresso, steamed milk, and velvety foam, crafted in true Italian tradition.',
      price: '$4.50',
      image: cappuccinoImage,
      details: {
        altitude: 'Various',
        process: 'Various',
        varietals: 'Arabica/Robusta Blend',
        cupping_notes: 'Chocolate, Nuts, Rich',
        roast_level: 'Medium-Dark'
      }
    },
    {
      number: '03',
      name: 'Caffè Marocchino',
      description: 'A delightful blend of espresso, cocoa powder, and milk foam, inspired by the cafes of Turin.',
      price: '$4.75',
      image: latteImage,
      details: {
        altitude: 'Various',
        process: 'Various',
        varietals: 'Premium Arabica Blend',
        cupping_notes: 'Cocoa, Sweet, Creamy',
        roast_level: 'Medium'
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Italian Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/coffees/italian">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>ITALIAN</h2>
          <p className={styles.subtitle}>TRADIZIONE PERFETTA</p>
          
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

export default ItalianMenu; 
