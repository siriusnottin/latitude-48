import { useEffect, useRef, useState, useCallback } from 'react';
import styles from '../pages/index.module.css';
import bean01 from '../assets/bean01.svg';
import bean02 from '../assets/bean02.svg';

const ParallaxBeans = () => {
  const beansRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number>();

  const updateBeanPositions = useCallback(() => {
    if (!beansRef.current) return;

    const beans = beansRef.current.children;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate distance from center (for parallax effect intensity)
    const deltaX = (mousePosition.x - centerX) / centerX;
    const deltaY = (mousePosition.y - centerY) / centerY;

    // Apply different movement intensities to each bean
    Array.from(beans).forEach((bean, index) => {
      const intensity = (4 - index) * 15; // Different intensity for each bean
      const x = deltaX * intensity;
      const y = deltaY * intensity;

      (bean as HTMLElement).style.transform = `
        translate(${x}px, ${y}px)
        rotate(${bean.className.includes('bean1') ? '64.948deg' : 
                bean.className.includes('bean2') ? '124.525deg' :
                bean.className.includes('bean3') ? '-154.204deg' : 
                '-16.323deg'}
      )`;
    });
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Use requestAnimationFrame to throttle updates
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      frameRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  // Only update bean positions when mouse position changes
  useEffect(() => {
    updateBeanPositions();
  }, [updateBeanPositions]);

  return (
    <div ref={beansRef} className={styles['beans']}>
      <div className={styles['bean1']}>
        <img src={bean01} alt="Coffee bean" />
      </div>
      <div className={styles['bean2']}>
        <img src={bean02} alt="Coffee bean" />
      </div>
      <div className={styles['bean3']}>
        <img src={bean01} alt="Coffee bean" />
      </div>
      <div className={styles['bean4']}>
        <img src={bean02} alt="Coffee bean" />
      </div>
    </div>
  );
};

export default ParallaxBeans; 