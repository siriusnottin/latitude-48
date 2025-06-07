import { useEffect, useRef, useState } from 'react';
import styles from '../styles/components/ScrollSequenceImage.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSequenceImageProps {
  images: string[];
  className?: string;
  imageAlt?: string;
  aspectRatio?: string;
  triggerStart?: string;
  triggerEnd?: string;
}

export const ScrollSequenceImage = ({
  images,
  className = '',
  imageAlt = 'Image sequence',
  aspectRatio = '3/4',
  triggerStart = 'top center',
  triggerEnd = 'bottom center'
}: ScrollSequenceImageProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      const loadImage = (src: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      };

      try {
        await Promise.all(images.map(loadImage));
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();

    // Set up GSAP animation
    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: triggerStart,
        end: triggerEnd,
        scrub: true,
        onUpdate: (self) => {
          const index = Math.min(
            Math.floor(self.progress * images.length),
            images.length - 1
          );
          setCurrentImageIndex(index);
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [images, triggerStart, triggerEnd]);

  return (
    <div
      className={`${styles.container} ${className}`}
      ref={containerRef}
      style={{ aspectRatio }}
    >
      <img
        src={images[currentImageIndex]}
        alt={imageAlt}
        className={styles.image}
        ref={el => {
          if (el) imagesRef.current[currentImageIndex] = el;
        }}
      />
    </div>
  );
}; 
