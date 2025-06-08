import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menu.module.css';

const TeaMenu = () => {
  const teas = [
    {
      name: 'Green Tea',
      items: [
        {
          name: 'Sencha',
          description:
            'Classic Japanese green tea with a fresh, grassy flavor.',
          price: '$4.50',
        },
        {
          name: 'Dragon Well',
          description: 'Premium Chinese green tea with a sweet, nutty taste.',
          price: '$5.00',
        },
      ],
    },
    {
      name: 'Black Tea',
      items: [
        {
          name: 'Earl Grey',
          description: 'Fragrant black tea flavored with oil of bergamot.',
          price: '$4.00',
        },
        {
          name: 'English Breakfast',
          description: 'Full-bodied blend perfect for starting your day.',
          price: '$4.00',
        },
      ],
    },
    {
      name: 'Herbal Tea',
      items: [
        {
          name: 'Chamomile',
          description: 'Soothing herbal infusion with honey-like sweetness.',
          price: '$4.00',
        },
        {
          name: 'Peppermint',
          description: 'Refreshing mint tea with a cool, crisp finish.',
          price: '$4.00',
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Tea Menu')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/tea">
        <div className={styles.menuContainer}>
          <h2 className={styles.pageTitle}>TEA SELECTION</h2>
          <p className={styles.subtitle}>CAREFULLY CURATED LEAVES</p>

          <div className={styles.teaGrid}>
            {teas.map((category, index) => (
              <div key={index} className={styles.teaCategory}>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
                <div className={styles.teaItems}>
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={styles.teaItem}>
                      <div className={styles.teaHeader}>
                        <h4 className={styles.teaName}>{item.name}</h4>
                        <span className={styles.teaPrice}>{item.price}</span>
                      </div>
                      <p className={styles.teaDescription}>
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

export default TeaMenu;
