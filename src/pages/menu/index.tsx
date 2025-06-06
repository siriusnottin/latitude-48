import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../utils/pageTitle';
import MenuLayout from './_components/MenuLayout';
import styles from '../../styles/menu.module.css';

import espressoImage from '../../assets/images/_DSC2868.webp?width=600';
import latteImage from '../../assets/images/_DSC2914.webp?width=600';
import coldBrewImage from '../../assets/images/_DSC3076.webp?width=600';

const MenuPage = () => {
  const coffeeMenu = [
    {
      name: 'Espresso',
      price: '$3.50',
      description: 'Our signature blend, perfectly extracted for a rich and balanced shot.'
    },
    {
      name: 'Americano',
      price: '$4.00',
      description: 'Espresso diluted with hot water, maintaining the full flavor of our coffee.'
    },
    {
      name: 'Cappuccino',
      price: '$4.50',
      description: 'Equal parts espresso, steamed milk, and silky milk foam.'
    },
    {
      name: 'Latte',
      price: '$4.75',
      description: 'Smooth espresso with steamed milk and a light layer of foam.'
    }
  ];

  const specialtyDrinks = [
    {
      name: 'Mocha',
      price: '$5.25',
      description: 'Espresso with rich chocolate, steamed milk, and whipped cream.'
    },
    {
      name: 'Caramel Macchiato',
      price: '$5.50',
      description: 'Vanilla-infused milk marked with espresso and caramel drizzle.'
    },
    {
      name: 'Honey Lavender Latte',
      price: '$5.75',
      description: 'Our signature latte with local honey and house-made lavender syrup.'
    }
  ];

  const featuredItems = [
    {
      name: 'Single Origin Ethiopian',
      description: 'Light roast with bright citrus notes and floral aroma.',
      price: '$4.50',
      image: espressoImage
    },
    {
      name: 'Seasonal Spiced Latte',
      description: 'Our signature latte infused with house-made spice blend.',
      price: '$5.75',
      image: latteImage
    },
    {
      name: 'Cold Brew Tonic',
      description: 'Smooth cold brew coffee with tonic water and a hint of citrus.',
      price: '$5.25',
      image: coldBrewImage
    }
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Menu')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu">
        <main className={styles.menuContainer}>
          <section className={`${styles.heroSection} ${styles.animate}`}>
            <h2 className={styles.title}>Our Menu</h2>
            <p className={styles.subtitle}>
              Carefully crafted coffee and specialty drinks made with love and precision
            </p>
          </section>

          <div className={styles.contentGrid}>
            <div className={`${styles.menuCategory} ${styles.animate}`} style={{ animationDelay: '0.2s' }}>
              <h2>Coffee</h2>
              <ul className={styles.menuList}>
                {coffeeMenu.map((item, index) => (
                  <li key={index} className={styles.menuItem}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${styles.menuCategory} ${styles.animate}`} style={{ animationDelay: '0.4s' }}>
              <h2>Specialty Drinks</h2>
              <ul className={styles.menuList}>
                {specialtyDrinks.map((item, index) => (
                  <li key={index} className={styles.menuItem}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className={`${styles.featuredSection} ${styles.animate}`} style={{ animationDelay: '0.6s' }}>
            <h2>Featured Items</h2>
            <div className={styles.featuredGrid}>
              {featuredItems.map((item, index) => (
                <div key={index} className={styles.featuredItem}>
                  <div className={styles.borderTop} />
                  <div className={styles.borderBottom} />
                  <img src={item.image} alt={item.name} className={styles.featuredImage} />
                  <div className={styles.featuredContent}>
                    <h3 className={styles.featuredName}>{item.name}</h3>
                    <p className={styles.featuredDescription}>{item.description}</p>
                    <div className={styles.priceOrderContainer}>
                      <span className={styles.featuredPrice}>{item.price}</span>
                      <button 
                        className={styles.orderButton}
                        onClick={() => console.log(`Ordering ${item.name}`)}
                      >
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

export default MenuPage;
