import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menu.module.css';

const ColdDrinksMenu = () => {
  const drinks = [
    {
      name: 'Cold Brew',
      items: [
        {
          name: 'Classic Cold Brew',
          description: 'Smooth and rich cold-brewed coffee served over ice.',
          price: '$4.75',
        },
        {
          name: 'Nitro Cold Brew',
          description:
            'Creamy, nitrogen-infused cold brew with a cascading effect.',
          price: '$5.25',
        },
      ],
    },
    {
      name: 'Iced Coffee',
      items: [
        {
          name: 'Iced Latte',
          description: 'Espresso and cold milk served over ice.',
          price: '$5.00',
        },
        {
          name: 'Iced Mocha',
          description: 'Espresso, chocolate, and cold milk over ice.',
          price: '$5.50',
        },
      ],
    },
    {
      name: 'Refreshers',
      items: [
        {
          name: 'Citrus Cold Brew',
          description: 'Cold brew coffee with a bright citrus twist.',
          price: '$5.50',
        },
        {
          name: 'Coffee Tonic',
          description: 'Espresso and tonic water with a slice of lime.',
          price: '$5.75',
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Cold Drinks Menu')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/cold-drinks">
        <div className={styles.menuContainer}>
          <h2 className={styles.pageTitle}>COLD DRINKS</h2>
          <p className={styles.subtitle}>REFRESHING SELECTIONS</p>

          <div className={styles.drinksGrid}>
            {drinks.map((category, index) => (
              <div key={index} className={styles.drinkCategory}>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
                <div className={styles.drinkItems}>
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={styles.drinkItem}>
                      <div className={styles.drinkHeader}>
                        <h4 className={styles.drinkName}>{item.name}</h4>
                        <span className={styles.drinkPrice}>{item.price}</span>
                      </div>
                      <p className={styles.drinkDescription}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MenuLayout>
    </>
  );
};

export default ColdDrinksMenu;
