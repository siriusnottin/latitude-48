import React, { useRef, useEffect, createContext, useContext, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Create context for managing reveal sequence
const RevealContext = createContext<number>(0);

export const RevealProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count] = useState(0);
  return (
    <RevealContext.Provider value={count}>
      {children}
    </RevealContext.Provider>
  );
};

// Define TypeScript props interface
export interface TextRevealProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  scrollTrigger?: boolean;
  animationKey?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  as: Component = 'div',
  className = '',
  duration = 0.8,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const index = useContext(RevealContext);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Create a SplitText instance
    const splitText = new SplitText(textRef.current, {
      type: 'lines',
      linesClass: 'line',
    });

    // Set initial state - hidden
    const setInitialState = () => {
      gsap.set(splitText.lines, {
        y: 50,
        opacity: 0,
      });
    };

    setInitialState();

    // Create the animation timeline
    timelineRef.current = gsap.timeline({
      paused: true,
    }).to(splitText.lines, {
      y: 0,
      opacity: 1,
      duration: duration,
      stagger: 0.15,
      ease: 'power3.out',
      delay: index * 0.2,
    });

    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: textRef.current,
      start: 'top 85%',
      onEnter: () => timelineRef.current?.restart(),
      onEnterBack: () => timelineRef.current?.restart(),
      onLeave: () => timelineRef.current?.progress(0),
      onLeaveBack: () => timelineRef.current?.progress(0),
    });

    // Cleanup function
    return () => {
      timelineRef.current?.kill();
      splitText.revert();
      trigger.kill();
    };
  }, [duration, index]);

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

