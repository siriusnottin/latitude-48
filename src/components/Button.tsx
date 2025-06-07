import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link, type Path } from '../router';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  to?: Path;
}

export const Button = ({ variant = 'primary', children, className = '', to, ...props }: ButtonProps) => {
  const elementRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = (e: Event) => {
      if (!(e instanceof MouseEvent)) return;
      isHovering.current = true;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Set initial position
      gsap.set(element, {
        "--x": `${x - 15}px`,
        "--y": `${y - 15}px`,
        "--scale": 0
      });

      // Animate the circle in
      gsap.to(element, {
        "--scale": 15,
        duration: 0.5,
        ease: "power1.out"
      });
    };

    const handleMouseMove = (e: Event) => {
      if (!(e instanceof MouseEvent)) return;
      if (!isHovering.current) return;
      
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(element, {
        "--x": `${x - 15}px`,
        "--y": `${y - 15}px`,
        duration: 0.1,
        ease: "none"
      });
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      gsap.to(element, {
        "--scale": 0,
        duration: 0.3,
        ease: "power2.in"
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(element);
    };
  }, []);

  const buttonStyle = {
    "--x": "0px",
    "--y": "0px",
    "--scale": 0,
  } as React.CSSProperties;

  if (to) {
    return (
      <Link to={to}>
        <button
          ref={elementRef as React.RefObject<HTMLButtonElement>}
          className={`btn ${variant} ${className}`}
          style={buttonStyle}
          type="button"
          {...props}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      ref={elementRef as React.RefObject<HTMLButtonElement>}
      className={`btn ${variant} ${className}`}
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
}; 
