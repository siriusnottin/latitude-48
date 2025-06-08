import React, { useEffect, useState } from 'react';
import TextReveal from './TextReveal';
import type { TextRevealProps } from './TextReveal';

interface AnimatedTextRevealProps
  extends Omit<TextRevealProps, 'animationKey'> {
  delay?: number;
}

export const AnimatedTextReveal: React.FC<AnimatedTextRevealProps> = ({
  delay = 0,
  ...props
}) => {
  const [key, setKey] = useState(() => Math.random().toString());

  useEffect(() => {
    if (props.scrollTrigger) {
      // Don't auto-animate if using scroll trigger
      return;
    }

    // Delay the animation based on the delay prop
    const timeoutId = setTimeout(() => {
      setKey(Math.random().toString());
    }, delay * 1000); // Convert to milliseconds

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay, props.scrollTrigger]);

  return <TextReveal {...props} animationKey={key} />;
};
