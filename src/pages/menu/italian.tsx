import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../utils/pageTitle';
import MenuLayout from './_components/MenuLayout';
import styles from '../../styles/menuLayout.module.css';

// Import images with Vite imagetools
import espressoImage from '../../assets/images/_DSC2868.jpg?w=800&webp&img';
import cappuccinoImage from '../../assets/images/_DSC2914.jpg?w=800&webp&img';
import latteImage from '../../assets/images/_DSC3076.jpg?w=800&webp&img';

const ItalianMenu = () => {
  const coffees = [
    {
      number: '01',
      name: 'Espresso Romano',
      description: 'A classic Italian espresso served with a twist of lemon peel, highlighting the coffee\'s bright notes and adding a citrusy aroma.',
      price: '$3.75',
      image: espressoImage
    },
    {
      number: '02',
      name: 'Cappuccino Tradizionale',
      description: 'Perfect balance of rich espresso, steamed milk, and velvety foam, crafted in true Italian tradition.',
      price: '$4.50',
      image: cappuccinoImage
    },
    {
      number: '03',
      name: 'Caffè Marocchino',
      description: 'A delightful blend of espresso, cocoa powder, and milk foam, inspired by the cafes of Turin.',
      price: '$4.75',
      image: latteImage
    }
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Italian Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/italian">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>ITALIAN</h2>
          <p className={styles.subtitle}>TRADIZIONE PERFETTA</p>
          
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

export default ItalianMenu; 