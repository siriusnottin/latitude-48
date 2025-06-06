import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../utils/pageTitle';
import MenuLayout from './_components/MenuLayout';
import styles from '../../styles/menuLayout.module.css';

// Import images with Vite imagetools
import yirgacheffeImage from '../../assets/images/_DSC2868.webp?width=800';
import sidamoImage from '../../assets/images/_DSC2914.webp?width=800';
import gujiImage from '../../assets/images/_DSC3076.webp?width=800';

const EthiopiaMenu = () => {
  const coffees = [
    {
      number: '01',
      name: 'Yirgacheffe',
      description: 'A bright and complex coffee with floral notes, bergamot essence, and a delicate tea-like body.',
      price: '$5.25',
      image: yirgacheffeImage
    },
    {
      number: '02',
      name: 'Sidamo',
      description: 'Sweet and wine-like with notes of blueberry and dark chocolate, showcasing Ethiopia\'s finest.',
      price: '$5.50',
      image: sidamoImage
    },
    {
      number: '03',
      name: 'Guji',
      description: 'Elegant and refined with jasmine, peach, and honey notes - a true Ethiopian masterpiece.',
      price: '$5.75',
      image: gujiImage
    }
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Ethiopian Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/ethiopia">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>ETHIOPIA</h2>
          <p className={styles.subtitle}>BIRTHPLACE OF COFFEE</p>
          
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

export default EthiopiaMenu; 