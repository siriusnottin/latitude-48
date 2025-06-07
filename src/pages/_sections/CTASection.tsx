import styles from '../index.module.css';

export const CTASection = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>
          Begin Your<br />Journey
        </h2>
        <p className={styles.ctaText}>
          Every cup tells a story. What's yours?
        </p>
        <a href="/menu" className={styles.ctaButton}>
          Get Your Coffee
        </a>
      </div>
    </section>
  );
}; 
