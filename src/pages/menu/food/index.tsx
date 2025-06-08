import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menu.module.css';

const FoodMenu = () => {
  const foods = [
    {
      name: 'Pastries',
      items: [
        {
          name: 'Croissant',
          description: 'Buttery, flaky French pastry.',
          price: '$3.75',
        },
        {
          name: 'Pain au Chocolat',
          description: 'Chocolate-filled croissant.',
          price: '$4.00',
        },
      ],
    },
    {
      name: 'Cookies',
      items: [
        {
          name: 'Chocolate Chip',
          description: 'Classic cookie with dark chocolate chunks.',
          price: '$2.75',
        },
        {
          name: 'Double Chocolate',
          description: 'Rich chocolate cookie with chocolate chips.',
          price: '$3.00',
        },
      ],
    },
    {
      name: 'Light Bites',
      items: [
        {
          name: 'Avocado Toast',
          description: 'Sourdough toast with mashed avocado and seeds.',
          price: '$8.50',
        },
        {
          name: 'Granola Bowl',
          description: 'House-made granola with yogurt and fresh fruits.',
          price: '$7.50',
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Food Menu')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/food">
        <div className={styles.menuContainer}>
          <h2 className={styles.pageTitle}>FOOD</h2>
          <p className={styles.subtitle}>FRESH & DELICIOUS</p>

          <div className={styles.foodGrid}>
            {foods.map((category, index) => (
              <div key={index} className={styles.foodCategory}>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
                <div className={styles.foodItems}>
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={styles.foodItem}>
                      <div className={styles.foodHeader}>
                        <h4 className={styles.foodName}>{item.name}</h4>
                        <span className={styles.foodPrice}>{item.price}</span>
                      </div>
                      <p className={styles.foodDescription}>
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

export default FoodMenu;
