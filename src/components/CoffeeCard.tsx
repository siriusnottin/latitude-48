import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../pages/menu/_components/menu.module.css';

export interface CoffeeDetails {
  altitude: string;
  process: string;
  varietals: string;
  cupping_notes: string;
  roast_level: string;
}

export interface CoffeeItem {
  number: string;
  name: string;
  description: string;
  price: string;
  image: string;
  details: CoffeeDetails;
}

interface CoffeeCardProps {
  coffee: CoffeeItem;
}

const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const infoCard = card.querySelector(`.${styles.infoCard}`);
    const tl = gsap.timeline({ paused: true });

    // Create hover animation
    tl.to(card, {
      scale: 1.02,
      boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)',
      duration: 0.3,
    }).to(
      infoCard,
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
      },
      '-=0.3'
    );

    // Define event handlers
    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    // Add hover listeners
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.coffeeItem}>
      <div className={styles.coffeeNumber}>{coffee.number}</div>
      <div className={styles.imageWrapper}>
        <img
          src={coffee.image}
          alt={coffee.name}
          className={styles.coffeeImage}
        />
      </div>
      <h3 className={styles.coffeeName}>{coffee.name}</h3>
      <p className={styles.coffeeDescription}>{coffee.description}</p>
      <span className={styles.coffeePrice}>{coffee.price}</span>

      <div className={styles.infoCard}>
        <h4 className={styles.infoTitle}>Coffee Details</h4>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Altitude:</span>
            <span>{coffee.details.altitude}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Process:</span>
            <span>{coffee.details.process}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Varietals:</span>
            <span>{coffee.details.varietals}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Cupping Notes:</span>
            <span>{coffee.details.cupping_notes}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Roast Level:</span>
            <span>{coffee.details.roast_level}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
