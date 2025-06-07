import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menu.module.css';
import CoffeeCard from '../../../components/CoffeeCard';
import type { CoffeeItem } from '../../../components/CoffeeCard';

import cortadoImage from '../../../assets/images/_DSC2868.webp?width=800';
import submarineImage from '../../../assets/images/_DSC2914.webp?width=800';
import mateLatteImage from '../../../assets/images/_DSC3076.webp?width=800';

const ArgentinaMenu = () => {
  const coffees: CoffeeItem[] = [
    {
      number: '01',
      name: 'Cortado Porteño',
      description: 'The Buenos Aires classic - equal parts espresso and steamed milk, perfectly balanced.',
      price: '$4.25',
      image: cortadoImage,
      details: {
        altitude: '800 - 1,200 meters',
        process: 'Washed',
        varietals: 'Arabica Blend',
        cupping_notes: 'Smooth, Balanced, Sweet',
        roast_level: 'Medium'
      }
    },
    {
      number: '02',
      name: 'Café Submarino',
      description: 'Rich espresso served with a dark chocolate "submarine" that melts into your cup.',
      price: '$5.00',
      image: submarineImage,
      details: {
        altitude: '900 - 1,300 meters',
        process: 'Washed',
        varietals: 'Arabica/Robusta Blend',
        cupping_notes: 'Dark Chocolate, Rich, Bold',
        roast_level: 'Dark'
      }
    },
    {
      number: '03',
      name: 'Mate Latte',
      description: 'Our signature fusion - yerba mate blended with espresso and steamed milk.',
      price: '$5.50',
      image: mateLatteImage,
      details: {
        altitude: '1,000 - 1,400 meters',
        process: 'Washed',
        varietals: 'Premium Arabica, Yerba Mate',
        cupping_notes: 'Herbal, Earthy, Creamy',
        roast_level: 'Medium-Light'
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Argentinian Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/coffees/argentina">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>ARGENTINA</h2>
          <p className={styles.subtitle}>SABOR DEL SUR</p>

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

export default ArgentinaMenu; 
