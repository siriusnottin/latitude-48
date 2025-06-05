import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../utils/pageTitle';
import MenuLayout from './_components/MenuLayout';
import styles from '../../styles/menu.module.css';

// Import images with Vite imagetools
import macchiatoImage1 from '../../assets/images/_DSC2868.jpg?w=800&webp&img';
import macchiatoImage2 from '../../assets/images/_DSC2914.jpg?w=800&webp&img';
import macchiatoImage3 from '../../assets/images/_DSC3076.jpg?w=800&webp&img';

const BrasilMenu = () => {
  const coffees = [
    {
      number: '01',
      name: 'Brazilian Espresso',
      description: 'Our signature Brazilian espresso combines rich coffee with a smooth, velvety texture, creating a perfect balance of bold flavors.',
      price: '$4.50',
      image: macchiatoImage1
    },
    {
      number: '02',
      name: 'Café com Leite',
      description: 'A traditional Brazilian preparation featuring locally sourced beans with steamed milk, offering notes of chocolate and caramel with a smooth finish.',
      price: '$4.75',
      image: macchiatoImage2
    },
    {
      number: '03',
      name: 'Santos Special',
      description: 'Our special Ritmo do Grao blend creates a unique coffee experience with hints of nuts and citrus, perfectly balanced and smooth.',
      price: '$5.00',
      image: macchiatoImage3
    }
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Brasil Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/brasil">
        <main className={styles.menuContainer}>
          <section className={`${styles.heroSection} ${styles.animate}`}>
            <h2 className={styles.title}>BRASIL</h2>
            <p className={styles.subtitle}>RITMO DO GRAO</p>
          </section>

          <section className={`${styles.featuredSection} ${styles.animate}`}>
            <div className={styles.featuredGrid}>
              {coffees.map((coffee, index) => (
                <div key={index} className={styles.featuredItem}>
                  <div className={styles.borderTop} />
                  <div className={styles.borderBottom} />
                  <img 
                    src={coffee.image} 
                    alt={coffee.name} 
                    className={styles.featuredImage}
                  />
                  <div className={styles.featuredContent}>
                    <div className={styles.coffeeNumber}>{coffee.number}</div>
                    <h3 className={styles.featuredName}>{coffee.name}</h3>
                    <p className={styles.featuredDescription}>{coffee.description}</p>
                    <div className={styles.priceOrderContainer}>
                      <span className={styles.featuredPrice}>{coffee.price}</span>
                      <button className={styles.orderButton}>
                        <span>Order <span className={styles.orderButtonIcon}>→</span></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </MenuLayout>
    </>
  );
};

export default BrasilMenu; 