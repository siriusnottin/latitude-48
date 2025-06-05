import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Define TypeScript props interface
interface TextRevealProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  stagger?: boolean;
  duration?: number;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  as: Component = 'div',
  className = '',
  stagger = false,
  duration = 0.8,
  delay = 0.1,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Create a SplitText instance to split the text into characters or words
    const splitText = new SplitText(textRef.current, {
      type: stagger ? 'chars,words' : 'lines',
      linesClass: 'line',
      charsClass: 'char',
      wordsClass: 'word',
    });

    // Set initial state - hidden
    gsap.set(stagger ? splitText.chars : splitText.lines, {
      y: 50,
      opacity: 0,
    });

    // Create the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%', // Start when top of element hits 85% down the viewport
        toggleActions: 'play none none none',
      },
    });

    // Animate the text
    tl.to(
      stagger ? splitText.chars : splitText.lines,
      {
        y: 0,
        opacity: 1,
        duration: duration,
        stagger: stagger ? 0.03 : 0.15, // Stagger the animation between elements
        ease: 'power3.out',
        delay: delay,
      }
    );

    // Cleanup function
    return () => {
      tl.kill();
      splitText.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [stagger, duration, delay]);

  // Dynamically create the component type (h1, p, div, etc.)
  return React.createElement(
    Component,
    {
      ref: textRef,
      className,
    },
    children
  );
}

export default TextReveal;

