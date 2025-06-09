// import styles from '../index.module.css';
import styles from './experienceSection.module.css';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Define the order of images
const imageOrder = [
  '_DSC2814',
  '_DSC2959',
  '_DSC2780',
  '_DSC2900',
  '_DSC2985',
  '_DSC2775',
  '_DSC3109',
  '_DSC2732',
  '_DSC2719',
  '_DSC3055',
  '_DSC2968',
  '_DSC2897',
  '_DSC2947',
  '_DSC2828',
];

// Import all images and maintain order
const imageImports = imageOrder.map(
  (name) =>
    import.meta.glob('../../assets/images/*.webp', {
      eager: true,
      query: '?width=800',
      import: 'default',
    })[`../../assets/images/${name}.webp`] as string
);

// Group images into sets of 6 (3x2 grid)
const imageGroups = Array.from(
  { length: Math.ceil(imageImports.length / 6) },
  (_, i) => imageImports.slice(i * 6, (i + 1) * 6)
);

export const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid) return;

    // Create GSAP context for proper cleanup
    const ctx = gsap.context(() => {
      // Calculate the total scroll distance needed
      const totalGroups = imageGroups.length;
      const scrollDistance = window.innerWidth * (totalGroups - 1.5);

      // Create the horizontal scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          toggleClass: 'active',
          invalidateOnRefresh: true, // Recalculate on window resize
        },
      });

      tl.to(grid, {
        x: -scrollDistance,
        ease: 'none',
      });
    }, sectionRef); // Pass the ref as the scope

    // Return cleanup function that reverts all GSAP animations in this context
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.experience}>
      <div className={styles.experienceContent}>
        <h2 className={styles.experienceTitle}>
          Let Your Senses
          <br />
          <span className="highlight">Travel</span>
        </h2>
        <div ref={gridRef} className={styles.experienceGrid}>
          {imageGroups.map((group, groupIndex) => (
            <div key={groupIndex} className={styles.imageGroup}>
              {group.map((image, index) => (
                <div
                  key={`${groupIndex}-${index}`}
                  className={styles.experienceItem}
                >
                  <img
                    src={image}
                    alt={`Coffee experience ${groupIndex * 6 + index + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
