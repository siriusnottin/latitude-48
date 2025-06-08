import { Helmet } from 'react-helmet';
import { getPageTitle } from '../../../utils/pageTitle';
import MenuLayout from '../_components/MenuLayout';
import styles from '../_components/menu.module.css';
import CoffeeCard from '../../../components/CoffeeCard';
import type { CoffeeItem } from '../../../components/CoffeeCard';

import kenyaImage1 from '../../../assets/images/_DSC2868.webp?width=800';
import kenyaImage2 from '../../../assets/images/_DSC2914.webp?width=800';
import kenyaImage3 from '../../../assets/images/_DSC3076.webp?width=800';

const KenyaMenu = () => {
  const coffees: CoffeeItem[] = [
    {
      number: '01',
      name: 'Kenya AA',
      description:
        'Premium AA grade with bright, wine-like acidity and complex fruit notes, delivering a full-bodied finish.',
      price: '$5.75',
      image: kenyaImage1,
      details: {
        altitude: '1,700 - 1,800 meters',
        process: 'Washed',
        varietals: 'SL28, SL34, Ruiru 11',
        cupping_notes: 'Blackberry, Citrus, Wine',
        roast_level: 'Medium',
      },
    },
    {
      number: '02',
      name: 'Nyeri Highland',
      description:
        'Bold and complex with blackberry sweetness, vibrant citrus notes, and a wine-like finish.',
      price: '$5.50',
      image: kenyaImage2,
      details: {
        altitude: '1,800 - 2,100 meters',
        process: 'Washed',
        varietals: 'SL28, SL34',
        cupping_notes: 'Blackberry, Orange, Brown Sugar',
        roast_level: 'Medium-Light',
      },
    },
    {
      number: '03',
      name: 'Mount Kenya Estate',
      description:
        'Rich and full-bodied with notes of black currant, citrus, and a sweet, winey aftertaste.',
      price: '$5.75',
      image: kenyaImage3,
      details: {
        altitude: '1,600 - 1,900 meters',
        process: 'Washed',
        varietals: 'SL28, SL34, K7',
        cupping_notes: 'Black Currant, Citrus, Caramel',
        roast_level: 'Medium',
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Kenyan Coffee')}</title>
      </Helmet>
      <MenuLayout currentPath="/menu/coffees/kenya">
        <div className={styles.menuContainer}>
          <h2 className={styles.originTitle}>KENYA</h2>
          <p className={styles.subtitle}>AA GRADE</p>

          <div className={styles.coffeeGrid}>
            {coffees.map((coffee, index) => (
              <CoffeeCard key={index} coffee={coffee} />
            ))}
          </div>
        </div>
      </MenuLayout>
    </>
  );
};

export default KenyaMenu;
