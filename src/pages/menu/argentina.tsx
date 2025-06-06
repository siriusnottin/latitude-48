import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../utils/pageTitle';
import MenuLayout from './_components/MenuLayout';
import styles from '../../styles/menuLayout.module.css';

import cortadoImage from '../../assets/images/_DSC2868.webp?width=800';
import submarineImage from '../../assets/images/_DSC2914.webp?width=800';
import mateLatteImage from '../../assets/images/_DSC3076.webp?width=800';

const ArgentinaMenu = () => {
  const coffees = [
    {
      number: '01',
      name: 'Cortado Porteño',
      description: 'The Buenos Aires classic - equal parts espresso and steamed milk, perfectly balanced.',
      price: '$4.25',
      image: cortadoImage
    },
    {
      number: '02',
      name: 'Café Submarino',
      description: 'Rich espresso served with a dark chocolate "submarine" that melts into your cup.',
      price: '$5.00',
      image: submarineImage
    },
    {
      number: '03',
      name: 'Mate Latte',
      description: 'Our signature fusion - yerba mate blended with espresso and steamed milk.',
      price: '$5.50',
      image: mateLatteImage
    }
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Argentinian Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/argentina">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>ARGENTINA</h2>
          <p className={styles.subtitle}>SABOR DEL SUR</p>
          
          <div className={styles.coffeeGrid}>
            {coffees.map((coffee, index) => (
              <div key={index} className={styles.coffeeItem}>
                <div className={styles.coffeeNumber}>{coffee.number}</div>
                <img 
                  src={coffee.image} 
                  alt={coffee.name} 
                  className={styles.coffeeImage}
                />
                <h3 className={styles.coffeeName}>{coffee.name}</h3>
                <p className={styles.coffeeDescription}>{coffee.description}</p>
                <span className={styles.coffeePrice}>{coffee.price}</span>
              </div>
            ))}
          </div>
        </div>
      </MenuLayout>
    </>
  );
};

export default ArgentinaMenu; 