import { useEffect, useRef, useState, useCallback } from 'react';
import styles from '../pages/index.module.css';
import bean01 from '../assets/bean01.svg';
import bean02 from '../assets/bean02.svg';

const ParallaxBeans = () => {
  const beansRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number | undefined>(undefined);

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
      const intensity = (4 - index) * 25; // Increased intensity
      const rotationIntensity = (4 - index) * 5; // Added rotation intensity
      const x = deltaX * intensity;
      const y = deltaY * intensity;
      const rotation = (deltaX + deltaY) * rotationIntensity;

      // Base rotation for each bean
      const baseRotation = bean.className.includes('bean1') ? 64.948 : 
                          bean.className.includes('bean2') ? 124.525 :
                          bean.className.includes('bean3') ? -154.204 : 
                          -16.323;

      // Apply transform with enhanced movement and rotation
      (bean as HTMLElement).style.transform = `
        translate3d(${x}px, ${y}px, 0)
        rotate(${baseRotation + rotation}deg)
        scale(${1 + Math.abs(deltaX + deltaY) * 0.1})
      `;
    });
  }, [mousePosition]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    });
  }, []);

  const handleDeviceOrientation = useCallback((event: DeviceOrientationEvent) => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      if (event.beta && event.gamma) {
        // Convert orientation values to mouse-like coordinates
        const x = (event.gamma / 90) * window.innerWidth;
        const y = (event.beta / 180) * window.innerHeight;
        setMousePosition({ x, y });
      }
    });
  }, []);

  // Handle mouse movement and device orientation
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleDeviceOrientation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [handleMouseMove, handleDeviceOrientation]);

  // Update bean positions when mouse position changes
  useEffect(() => {
    updateBeanPositions();
  }, [updateBeanPositions]);

  return (
    <div ref={beansRef} className={styles.beans}>
      <div className={styles.bean1}>
        <img src={bean01} alt="Coffee bean" />
      </div>
      <div className={styles.bean2}>
        <img src={bean02} alt="Coffee bean" />
      </div>
      <div className={styles.bean3}>
        <img src={bean01} alt="Coffee bean" />
      </div>
      <div className={styles.bean4}>
        <img src={bean02} alt="Coffee bean" />
      </div>
    </div>
  );
};

export default ParallaxBeans; 
