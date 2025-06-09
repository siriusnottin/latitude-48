import { memo } from 'react';
import styles from '../pages/index.module.css';
import arrowIcon from '../assets/icons/arrow.svg';
import featuredWebp from '../assets/images/_DSC2706.webp';
import { Button } from './Button';

const FirstSection = () => {
  return (
    <section className={styles['first']}>
      <picture className={styles['image']}>
        <source
          srcSet={featuredWebp}
          type="image/webp"
          sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
        />
        <img
          src={featuredWebp}
          alt="A cup of hot chocolate"
          width="1200"
          height="800"
          loading="lazy"
          style={{ objectFit: 'cover', background: '#eee' }}
        />
      </picture>
      <div>
        <p className={styles['text']}>
          At Lattitude 48, every cup tells the story of handpicked beans from
          the world's finest origins from the highlands of Ethiopia to the lush
          valleys of Latin America.
        </p>
        <p>Crafted with care, our coffee reveals rich, authentic flavors.</p>
      </div>
      <p>
        <Button variant="primary" to="/menu">
          <span>Coffee Map</span>
          <img src={arrowIcon} alt="Arrow icon" className={styles['arrow']} />
        </Button>
      </p>
    </section>
  );
};

export default memo(FirstSection);
