import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({ children, className = '', delay = 0 }: SectionRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-100px',
    amount: 0.2
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        y: 50,
        scale: 0.95,
        filter: 'blur(10px)'
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: 'blur(0px)'
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.25, 0.25, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggeredRevealProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function StaggeredReveal({ children, className = '', staggerDelay = 0.1 }: StaggeredRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-50px',
    amount: 0.1
  });

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ 
            opacity: 0, 
            y: 30,
            scale: 0.9,
            rotateX: -15
          }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            scale: 1,
            rotateX: 0
          } : {}}
          transition={{ 
            duration: 0.6, 
            delay: index * staggerDelay,
            ease: [0.25, 0.25, 0, 1],
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}