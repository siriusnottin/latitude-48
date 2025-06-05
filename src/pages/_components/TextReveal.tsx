import React, { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Create a shared context for coordinating animations
const animationContext = gsap.context(() => {});

// Define TypeScript props interface
interface TextRevealProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  stagger?: boolean;
  duration?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  as: Component = 'div',
  className = '',
  stagger = false,
  duration = 0.8,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
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

    // Add to the shared context timeline
    animationContext.add(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Animate the text with automatic staggering
      tl.to(
        stagger ? splitText.chars : splitText.lines,
        {
          y: 0,
          opacity: 1,
          duration: duration,
          stagger: stagger ? 0.03 : 0.15,
          ease: 'power3.out',
        },
        '>-0.5' // Overlap with previous animation for smoother flow
      );

      return tl;
    });

    // Cleanup function
    return () => {
      splitText.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [stagger, duration]);

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

