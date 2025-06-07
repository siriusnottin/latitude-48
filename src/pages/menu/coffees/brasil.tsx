import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menu.module.css';
import CoffeeCard from '../../../components/CoffeeCard';
import type { CoffeeItem } from '../../../components/CoffeeCard';

import macchiatoImage1 from '../../../assets/images/_DSC2868.webp?width=800';
import macchiatoImage2 from '../../../assets/images/_DSC2914.webp?width=800';
import macchiatoImage3 from '../../../assets/images/_DSC3076.webp?width=800';

const BrasilMenu = () => {
  const coffees: CoffeeItem[] = [
    {
      number: '01',
      name: 'Brazilian Espresso',
      description: 'Our signature Brazilian espresso combines rich coffee with a smooth, velvety texture, creating a perfect balance of bold flavors.',
      price: '$4.50',
      image: macchiatoImage1,
      details: {
        altitude: '800 - 1,200 meters',
        process: 'Natural',
        varietals: 'Mundo Novo, Bourbon',
        cupping_notes: 'Chocolate, Nuts, Caramel',
        roast_level: 'Medium-Dark'
      }
    },
    {
      number: '02',
      name: 'Café com Leite',
      description: 'A traditional Brazilian preparation featuring locally sourced beans with steamed milk, offering notes of chocolate and caramel with a smooth finish.',
      price: '$4.75',
      image: macchiatoImage2,
      details: {
        altitude: '900 - 1,100 meters',
        process: 'Natural',
        varietals: 'Yellow Bourbon, Catuai',
        cupping_notes: 'Milk Chocolate, Caramel, Hazelnut',
        roast_level: 'Medium'
      }
    },
    {
      number: '03',
      name: 'Santos Special',
      description: 'Our special Ritmo do Grao blend creates a unique coffee experience with hints of nuts and citrus, perfectly balanced and smooth.',
      price: '$5.00',
      image: macchiatoImage3,
      details: {
        altitude: '800 - 1,000 meters',
        process: 'Pulped Natural',
        varietals: 'Yellow Bourbon, Mundo Novo',
        cupping_notes: 'Nuts, Citrus, Brown Sugar',
        roast_level: 'Medium'
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Brasil Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/coffees/brasil">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>BRASIL</h2>
          <p className={styles.subtitle}>RITMO DO GRAO</p>

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

export default BrasilMenu; 
