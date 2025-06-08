import { useState, useEffect } from 'react';

const getInitialPosition = () => ({
  x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
  y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
});

// Helper function to get the background color of an element
const getBackgroundColor = (element: HTMLElement): string => {
  const bgcolor = window.getComputedStyle(element).backgroundColor;
  if (bgcolor !== 'rgba(0, 0, 0, 0)' && bgcolor !== 'transparent') {
    return bgcolor;
  }
  return element.parentElement
    ? getBackgroundColor(element.parentElement)
    : '#ffffff';
};

// Helper function to determine if a color is light or dark
const isLightColor = (color: string): boolean => {
  const rgb = color.match(/\d+/g);
  if (!rgb) return true;
  const [r, g, b] = rgb.map(Number);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
};

const MouseTracker = () => {
  const [position, setPosition] = useState(getInitialPosition);
  const [isHovering, setIsHovering] = useState(false);
  const [borderColor, setBorderColor] = useState('black');

  useEffect(() => {
    let animationFrameId: number;
    let currentPosition = getInitialPosition();

    const handleInitialPosition = () => {
      const handleFirstMove = (event: MouseEvent) => {
        currentPosition = { x: event.clientX, y: event.clientY };
        setPosition(currentPosition);
        window.removeEventListener('mousemove', handleFirstMove);
      };
      window.addEventListener('mousemove', handleFirstMove, { once: true });
    };
    handleInitialPosition();

    const handleMouseMove = (event: MouseEvent) => {
      const targetX = event.clientX;
      const targetY = event.clientY;

      // Get the element under the cursor
      const elementUnderCursor = document.elementFromPoint(targetX, targetY);
      if (elementUnderCursor) {
        const bgColor = getBackgroundColor(elementUnderCursor as HTMLElement);
        setBorderColor(isLightColor(bgColor) ? '#000000' : '#ffffff');
      }

      const animate = () => {
        // Smooth interpolation
        const dx = targetX - currentPosition.x;
        const dy = targetY - currentPosition.y;

        currentPosition = {
          x: currentPosition.x + dx * 0.5,
          y: currentPosition.y + dy * 0.5,
        };

        setPosition(currentPosition);

        if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('btn') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('btn') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="mouse_tracker"
      style={{
        position: 'fixed',
        transform: `translate(${position.x - 15}px, ${position.y - 15}px) scale(${isHovering ? 0.4 : 1})`,
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: isHovering ? 'var(--primary-color)' : 'transparent',
        border: isHovering ? 'none' : `2px solid ${borderColor}`,
        pointerEvents: 'none',
        transition:
          'transform 0.04s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s ease, border 0.15s ease',
        zIndex: 1000,
      }}
    />
  );
};

export default MouseTracker;
