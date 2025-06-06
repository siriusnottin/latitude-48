import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../../../styles/menuLayout.module.css';

// Import images with Vite imagetools
import macchiatoImage1 from '../../../assets/images/_DSC2868.webp?width=800';
import macchiatoImage2 from '../../../assets/images/_DSC2914.webp?width=800';
import macchiatoImage3 from '../../../assets/images/_DSC3076.webp?width=800';

const BrasilMenu = () => {
  const coffees = [
    {
      number: '01',
      name: 'Macchiato',
      description: 'Our signature Brazilian macchiato combines rich espresso with a delicate touch of steamed milk, creating a perfect balance of bold coffee and creamy texture.',
      price: '$4.50',
      image: macchiatoImage1
    },
    {
      number: '02',
      name: 'Macchiato',
      description: 'A traditional Brazilian preparation featuring locally sourced beans, this macchiato offers notes of chocolate and caramel with a smooth finish.',
      price: '$4.75',
      image: macchiatoImage2
    },
    {
      number: '03',
      name: 'Macchiato',
      description: 'Our special Ritmo do Grao blend creates a unique macchiato experience with hints of nuts and citrus, topped with perfectly textured milk.',
      price: '$5.00',
      image: macchiatoImage3
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

export default BrasilMenu; 