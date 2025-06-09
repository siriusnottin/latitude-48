import { ScrollSequenceImage } from './ScrollSequenceImage';
import styles from '../styles/components/ScrollSequenceSection.module.css';

interface ScrollSequenceSectionProps {
  images: string[];
  title: string;
  description: string;
  className?: string;
  imageAlt?: string;
}

export const ScrollSequenceSection = ({
  images,
  title,
  description,
  className = '',
  imageAlt = 'Image sequence'
}: ScrollSequenceSectionProps) => {
  return (
    <section className={`${styles.scrollSequence} ${className}`}>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <ScrollSequenceImage
            images={images}
            imageAlt={imageAlt}
            className={styles.imageContainer}
          />
        </div>
      </div>
    </section>
  );
};
