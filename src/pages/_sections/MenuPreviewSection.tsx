import styles from '../../styles/sections/menu-preview.module.css';

export const MenuPreviewSection = () => {
  return (
    <section className={styles.menuPreview}>
      <div className={styles.menuContent}>
        <h2 className={styles.menuTitle}>World<br />Hop Aboard</h2>
        <div className={styles.menuGrid}>
          <div className={styles.menuItem}>
            <span className={styles.menuRegion}>Brasil</span>
            <h3>Ritmo do Grão</h3>
            <p>Notes of chocolate & nuts</p>
          </div>
          <div className={styles.menuItem}>
            <span className={styles.menuRegion}>Ethiopia</span>
            <h3>Yirgacheffe</h3>
            <p>Floral & citrus notes</p>
          </div>
          <div className={styles.menuItem}>
            <span className={styles.menuRegion}>Colombia</span>
            <h3>Alto del Obispo</h3>
            <p>Caramel & red fruits</p>
          </div>
        </div>
        <a href="/menu" className={styles.menuButton}>
          Explore Menu
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </section>
  );
}; 
