import { motion, useScroll, useSpring } from 'motion/react';
import { useScrollAnimation } from './ScrollAnimationProvider';

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const { isAnimating } = useScrollAnimation();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Main Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transform-gpu z-50"
        style={{ scaleX, transformOrigin: '0%' }}
      />
      
      {/* Active Navigation Indicator */}
      {isAnimating && (
        <motion.div
          className="fixed top-1 left-0 right-0 h-0.5 transform-gpu z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
            animate={{
              background: [
                'linear-gradient(90deg, #fbbf24 0%, #ef4444 50%, #ec4899 100%)',
                'linear-gradient(90deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                'linear-gradient(90deg, #f59e0b 0%, #ef4444 50%, #06b6d4 100%)'
              ]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{ width: '100%' }}
          />
        </motion.div>
      )}
      
      {/* Floating Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="space-y-4">
          {['hero', 'about', 'skills', 'portfolio', 'contact'].map((section, index) => (
            <motion.button
              key={section}
              className="w-3 h-3 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const element = document.getElementById(section);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              animate={{
                borderColor: isAnimating ? ['#ff006e', '#06ffa5', '#3a86ff'] : '#ffffff50'
              }}
              transition={{
                borderColor: {
                  duration: 1,
                  repeat: isAnimating ? Infinity : 0,
                  ease: 'easeInOut'
                }
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}