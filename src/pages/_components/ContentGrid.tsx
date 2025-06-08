import storyImage from '../../assets/images/_DSC2808.webp?width=800';
import atmosphereImage from '../../assets/images/_DSC2914.webp?width=800';
import styles from './contentGrid.module.css';

interface Value {
  title: string;
  description: string;
}

interface ContentGridProps {
  values: Value[];
}

export const ContentGrid = ({ values }: ContentGridProps) => {
  return (
    <div className={styles.contentGrid}>
      <div
        className={`${styles.storySection} ${styles.animate}`}
        style={{ animationDelay: '0.2s' }}
      >
        <div className={styles.storyImage}>
          <img src={storyImage} alt="Coffee roasting process" />
        </div>
        <h2>The Journey</h2>
        <p>
          Founded in 2018, Latitude 48 began with a simple mission: to create a
          space where coffee, community, and culture intersect. Our name draws
          inspiration from the 48th parallel north, where some of the world's
          finest coffee beans are grown.
        </p>
        <p>
          What started as a small coffee cart has grown into a beloved
          neighborhood destination, where every cup tells a story and every
          visitor becomes part of our extended family.
        </p>
      </div>

      <div
        className={`${styles.atmosphereSection} ${styles.animate}`}
        style={{ animationDelay: '0.4s' }}
      >
        <div className={styles.atmosphereImage}>
          <img src={atmosphereImage} alt="Café atmosphere" />
        </div>
        <h2>Our Values</h2>
        <div className={styles.valuesList}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
