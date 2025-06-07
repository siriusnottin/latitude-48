import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = (e: MouseEvent) => {
      isHovering.current = true;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Set initial position
      gsap.set(button, {
        "--x": `${x - 15}px`,
        "--y": `${y - 15}px`,
        "--scale": 0
      });

      // Animate the circle in
      gsap.to(button, {
        "--scale": 15,
        duration: 0.5,
        ease: "power1.out"
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering.current) return;
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(button, {
        "--x": `${x - 15}px`,
        "--y": `${y - 15}px`,
        duration: 0.1,
        ease: "none"
      });
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      gsap.to(button, {
        "--scale": 0,
        duration: 0.3,
        ease: "power2.in"
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(button);
    };
  }, []);

  const buttonStyle = {
    "--x": "0px",
    "--y": "0px",
    "--scale": 0,
  } as React.CSSProperties;

  return (
    <button
      ref={buttonRef}
      className={`btn ${variant} ${className}`}
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
}; 
