import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ScrollAnimationContextType {
  triggerScrollAnimation: (targetId: string) => void;
  isAnimating: boolean;
}

const ScrollAnimationContext = createContext<ScrollAnimationContextType | undefined>(undefined);

export function useScrollAnimation() {
  const context = useContext(ScrollAnimationContext);
  if (!context) {
    throw new Error('useScrollAnimation must be used within ScrollAnimationProvider');
  }
  return context;
}

interface ScrollAnimationProviderProps {
  children: React.ReactNode;
}

export function ScrollAnimationProvider({ children }: ScrollAnimationProviderProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'transition' | 'complete'>('idle');

  const triggerScrollAnimation = useCallback((targetId: string) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setAnimationPhase('transition');

    // Create ripple effect from cursor position
    const createRippleEffect = () => {
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: linear-gradient(45deg, #ff006e, #06ffa5, #3a86ff);
        transform: translate(-50%, -50%) scale(0);
        z-index: 9999;
        pointer-events: none;
        animation: rippleExpand 0.8s ease-out forwards;
      `;

      const style = document.createElement('style');
      style.textContent = `
        @keyframes rippleExpand {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(200);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
      document.body.appendChild(ripple);

      setTimeout(() => {
        document.body.removeChild(ripple);
        document.head.removeChild(style);
      }, 800);
    };

    createRippleEffect();

    // Smooth scroll with easing
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      setAnimationPhase('complete');
      
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationPhase('idle');
      }, 1000);
    }, 400);
  }, [isAnimating]);

  return (
    <ScrollAnimationContext.Provider value={{ triggerScrollAnimation, isAnimating }}>
      {children}
      
      {/* Transition Overlay */}
      <AnimatePresence>
        {animationPhase === 'transition' && (
          <motion.div
            className="fixed inset-0 z-[9998] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* 3D Grid Transition Effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(45deg, rgba(255, 0, 110, 0.1) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(6, 255, 165, 0.1) 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, rgba(58, 134, 255, 0.1) 75%),
                  linear-gradient(-45deg, transparent 75%, rgba(255, 190, 11, 0.1) 75%)
                `,
                backgroundSize: '60px 60px',
                backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
              }}
              animate={{
                backgroundPosition: [
                  '0 0, 0 30px, 30px -30px, -30px 0px',
                  '60px 60px, 60px 90px, 90px 30px, 30px 60px'
                ]
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />

            {/* Scanning Lines */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-1"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${['#ff006e', '#06ffa5', '#3a86ff'][i]} 50%, transparent 100%)`,
                  top: `${30 + i * 20}%`,
                  boxShadow: `0 0 20px ${['#ff006e', '#06ffa5', '#3a86ff'][i]}`
                }}
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '100%', opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.1,
                  ease: 'easeInOut'
                }}
              />
            ))}

            {/* 3D Geometric Shapes */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 rounded"
                style={{
                  width: '40px',
                  height: '40px',
                  left: `${20 + i * 20}%`,
                  top: `${15 + i * 15}%`,
                  borderColor: ['#ff006e', '#06ffa5', '#3a86ff', '#ffbe0b'][i],
                  boxShadow: `0 0 15px ${['#ff006e', '#06ffa5', '#3a86ff', '#ffbe0b'][i]}`
                }}
                initial={{ 
                  scale: 0, 
                  rotate: 0,
                  opacity: 0
                }}
                animate={{ 
                  scale: [0, 1.2, 1], 
                  rotate: 360,
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: 'easeInOut'
                }}
              />
            ))}

            {/* Center Loading Indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-16 h-16 border-4 border-transparent rounded-full"
                style={{
                  borderTopColor: '#ff006e',
                  borderRightColor: '#06ffa5',
                  borderBottomColor: '#3a86ff',
                  borderLeftColor: '#ffbe0b',
                }}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 0.8, 
                  ease: 'linear',
                  repeat: 1
                }}
              />
              
              <motion.div
                className="absolute inset-2 border-2 border-transparent rounded-full"
                style={{
                  borderTopColor: '#ffbe0b',
                  borderBottomColor: '#8338ec',
                }}
                animate={{ rotate: -360 }}
                transition={{ 
                  duration: 0.6, 
                  ease: 'linear',
                  repeat: 1
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click Feedback Particles */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="fixed inset-0 z-[9997] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: ['#ff006e', '#06ffa5', '#3a86ff', '#ffbe0b', '#8338ec', '#fb5607', '#ff8000', '#00ff80'][i],
                  left: `${45 + Math.random() * 10}%`,
                  top: `${45 + Math.random() * 10}%`,
                  boxShadow: `0 0 10px ${['#ff006e', '#06ffa5', '#3a86ff', '#ffbe0b', '#8338ec', '#fb5607', '#ff8000', '#00ff80'][i]}`
                }}
                initial={{ 
                  scale: 0,
                  x: 0,
                  y: 0 
                }}
                animate={{ 
                  scale: [0, 1, 0],
                  x: (Math.random() - 0.5) * 200,
                  y: (Math.random() - 0.5) * 200,
                }}
                transition={{ 
                  duration: 1,
                  delay: i * 0.05,
                  ease: 'easeOut'
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </ScrollAnimationContext.Provider>
  );
}