import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../utils/pageTitle';
import MenuLayout from './_components/MenuLayout';
import styles from '../../styles/menuLayout.module.css';

import santiagoCoffeeImage from '../../assets/images/_DSC2868.webp?width=800';
import valparaisoCoffeeImage from '../../assets/images/_DSC2914.webp?width=800';
import andesCoffeeImage from '../../assets/images/_DSC3076.webp?width=800';

const ChiliMenu = () => {
  const coffees = [
    {
      number: '01',
      name: 'Santiago Blend',
      description: 'A medium roast blend with notes of caramel, toasted nuts, and a subtle citrus finish.',
      price: '$4.75',
      image: santiagoCoffeeImage
    },
    {
      number: '02',
      name: 'Valparaiso Special',
      description: 'Light-medium roast featuring bright acidity with hints of chocolate and red berries.',
      price: '$5.00',
      image: valparaisoCoffeeImage
    },
    {
      number: '03',
      name: 'Andes High Grown',
      description: 'Single-origin coffee from high-altitude farms, offering complex flavors of honey and stone fruit.',
      price: '$5.25',
      image: andesCoffeeImage
    }
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Chilean Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/chili">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>CHILI</h2>
          <p className={styles.subtitle}>ALTURA ANDINA</p>
          
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

export default ChiliMenu; 