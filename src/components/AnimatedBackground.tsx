import { motion } from 'motion/react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Vibrant Rainbow Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, #ff0080 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #00ff80 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #8000ff 0%, transparent 50%),
            radial-gradient(circle at 90% 70%, #ff8000 0%, transparent 50%),
            radial-gradient(circle at 10% 30%, #0080ff 0%, transparent 50%),
            linear-gradient(135deg, #ff006e 0%, #fb5607 20%, #ffbe0b 40%, #8338ec 60%, #3a86ff 80%, #06ffa5 100%)
          `,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 80%, #ff0080 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, #00ff80 0%, transparent 50%),
             radial-gradient(circle at 40% 40%, #8000ff 0%, transparent 50%),
             radial-gradient(circle at 90% 70%, #ff8000 0%, transparent 50%),
             radial-gradient(circle at 10% 30%, #0080ff 0%, transparent 50%),
             linear-gradient(135deg, #ff006e 0%, #fb5607 20%, #ffbe0b 40%, #8338ec 60%, #3a86ff 80%, #06ffa5 100%)`,
            `radial-gradient(circle at 60% 30%, #06ffa5 0%, transparent 50%),
             radial-gradient(circle at 30% 70%, #ff006e 0%, transparent 50%),
             radial-gradient(circle at 70% 60%, #ffbe0b 0%, transparent 50%),
             radial-gradient(circle at 20% 40%, #8338ec 0%, transparent 50%),
             radial-gradient(circle at 85% 85%, #3a86ff 0%, transparent 50%),
             linear-gradient(225deg, #06ffa5 0%, #3a86ff 20%, #8338ec 40%, #ffbe0b 60%, #fb5607 80%, #ff006e 100%)`,
            `radial-gradient(circle at 80% 60%, #fb5607 0%, transparent 50%),
             radial-gradient(circle at 20% 40%, #3a86ff 0%, transparent 50%),
             radial-gradient(circle at 50% 80%, #ff006e 0%, transparent 50%),
             radial-gradient(circle at 70% 10%, #06ffa5 0%, transparent 50%),
             radial-gradient(circle at 5% 60%, #8338ec 0%, transparent 50%),
             linear-gradient(45deg, #ffbe0b 0%, #ff006e 20%, #8338ec 40%, #3a86ff 60%, #06ffa5 80%, #fb5607 100%)`
          ]
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      {/* Colorful 3D Grid System */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 0, 128, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 128, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
            backgroundImage: [
              `linear-gradient(rgba(255, 0, 128, 0.6) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 255, 128, 0.6) 1px, transparent 1px)`,
              `linear-gradient(rgba(0, 128, 255, 0.6) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255, 128, 0, 0.6) 1px, transparent 1px)`,
              `linear-gradient(rgba(128, 0, 255, 0.6) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255, 255, 0, 0.6) 1px, transparent 1px)`
            ]
          }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        />
        
        {/* Rainbow diagonal grid overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255, 0, 110, 0.5) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(6, 255, 165, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px', '0px 0px'],
            backgroundImage: [
              `linear-gradient(45deg, rgba(255, 0, 110, 0.5) 1px, transparent 1px),
               linear-gradient(-45deg, rgba(6, 255, 165, 0.5) 1px, transparent 1px)`,
              `linear-gradient(45deg, rgba(131, 56, 236, 0.5) 1px, transparent 1px),
               linear-gradient(-45deg, rgba(251, 86, 7, 0.5) 1px, transparent 1px)`,
              `linear-gradient(45deg, rgba(58, 134, 255, 0.5) 1px, transparent 1px),
               linear-gradient(-45deg, rgba(255, 190, 11, 0.5) 1px, transparent 1px)`
            ]
          }}
          transition={{
            duration: 15,
            ease: 'linear',
            repeat: Infinity,
          }}
        />
      </div>

      {/* Vibrant Floating 3D Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Rainbow Wireframe Cubes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`cube-${i}`}
            className="absolute border-4"
            style={{
              width: `${80 + i * 15}px`,
              height: `${80 + i * 15}px`,
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
              borderColor: ['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff'][i],
              boxShadow: `0 0 20px ${['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff'][i]}80`,
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 180],
              scale: [1, 1.3, 1],
              x: [0, 60, -40, 0],
              y: [0, -50, 40, 0],
              borderColor: [
                ['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff'][i],
                ['#06ffa5', '#ff006e', '#fb5607', '#ffbe0b', '#8338ec'][i],
                ['#3a86ff', '#06ffa5', '#ff006e', '#fb5607', '#ffbe0b'][i]
              ]
            }}
            transition={{
              duration: 12 + i * 2,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: i * 1.5,
            }}
            style={{
              transformStyle: 'preserve-3d',
              background: `linear-gradient(135deg, ${['#ff006e20', '#fb560720', '#ffbe0b20', '#8338ec20', '#3a86ff20'][i]}, ${['#06ffa520', '#ff006e20', '#fb560720', '#ffbe0b20', '#8338ec20'][i]})`,
            }}
          />
        ))}

        {/* Neon Spheres */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`sphere-${i}`}
            className="absolute rounded-full border-4"
            style={{
              width: `${70 + i * 20}px`,
              height: `${70 + i * 20}px`,
              right: `${10 + i * 12}%`,
              top: `${15 + i * 18}%`,
              borderColor: ['#06ffa5', '#ff006e', '#ffbe0b', '#8338ec'][i],
              background: `radial-gradient(circle at 30% 30%, ${['#06ffa540', '#ff006e40', '#ffbe0b40', '#8338ec40'][i]}, ${['#3a86ff20', '#06ffa520', '#ff006e20', '#fb560720'][i]})`,
              boxShadow: `0 0 30px ${['#06ffa5', '#ff006e', '#ffbe0b', '#8338ec'][i]}`,
            }}
            animate={{
              scale: [1, 1.4, 0.9, 1],
              x: [0, -70, 50, 0],
              y: [0, 60, -40, 0],
              rotate: [0, 180, 360],
              borderColor: [
                ['#06ffa5', '#ff006e', '#ffbe0b', '#8338ec'][i],
                ['#3a86ff', '#06ffa5', '#ff006e', '#ffbe0b'][i],
                ['#fb5607', '#3a86ff', '#06ffa5', '#ff006e'][i]
              ]
            }}
            transition={{
              duration: 10 + i * 2,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: i * 1.2,
            }}
          />
        ))}

        {/* Colorful Wireframe Pyramids */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`pyramid-${i}`}
            className="absolute"
            style={{
              left: `${55 + i * 20}%`,
              bottom: `${10 + i * 25}%`,
              width: '0',
              height: '0',
              borderLeft: '50px solid transparent',
              borderRight: '50px solid transparent',
              borderBottom: `70px solid ${['#ff006e60', '#3a86ff60', '#06ffa560'][i]}`,
              filter: `drop-shadow(0 0 15px ${['#ff006e', '#3a86ff', '#06ffa5'][i]})`,
            }}
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.5, 1],
              y: [0, -60, 0],
              rotateZ: [0, 45, 0],
              borderBottomColor: [
                `${['#ff006e60', '#3a86ff60', '#06ffa560'][i]}`,
                `${['#ffbe0b60', '#ff006e60', '#3a86ff60'][i]}`,
                `${['#8338ec60', '#ffbe0b60', '#ff006e60'][i]}`
              ]
            }}
            transition={{
              duration: 16 + i * 3,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Rainbow Animated Mesh Lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-1"
            style={{
              width: '100%',
              top: `${i * 12 + 5}%`,
              transformOrigin: 'center',
              background: `linear-gradient(90deg, transparent 0%, ${['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff', '#06ffa5', '#ff0080', '#00ff80'][i]} 50%, transparent 100%)`,
              boxShadow: `0 0 10px ${['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff', '#06ffa5', '#ff0080', '#00ff80'][i]}`,
            }}
            animate={{
              scaleX: [0, 1, 0.3, 1, 0],
              opacity: [0, 1, 0.7, 1, 0],
              rotateZ: [0, 3, -2, 2, 0],
              background: [
                `linear-gradient(90deg, transparent 0%, ${['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff', '#06ffa5', '#ff0080', '#00ff80'][i]} 50%, transparent 100%)`,
                `linear-gradient(90deg, transparent 0%, ${['#06ffa5', '#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff', '#ff0080', '#00ff80'][i]} 50%, transparent 100%)`,
                `linear-gradient(90deg, transparent 0%, ${['#3a86ff', '#06ffa5', '#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#ff0080', '#00ff80'][i]} 50%, transparent 100%)`
              ]
            }}
            transition={{
              duration: 6 + i * 0.5,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Colorful 3D Studio-like UI Elements */}
      <div className="absolute top-4 right-4 opacity-70">
        <motion.div
          className="flex flex-col space-y-3"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          {['X', 'Y', 'Z'].map((axis, i) => (
            <motion.div
              key={axis}
              className={`w-10 h-10 border-4 flex items-center justify-center font-mono font-bold text-white shadow-lg`}
              style={{
                borderColor: ['#ff006e', '#06ffa5', '#3a86ff'][i],
                backgroundColor: [`#ff006e20`, `#06ffa520`, `#3a86ff20`][i],
                boxShadow: `0 0 15px ${['#ff006e', '#06ffa5', '#3a86ff'][i]}`,
                color: ['#ff006e', '#06ffa5', '#3a86ff'][i],
              }}
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.2, 1],
                borderColor: [
                  ['#ff006e', '#06ffa5', '#3a86ff'][i],
                  ['#ffbe0b', '#ff006e', '#06ffa5'][i],
                  ['#8338ec', '#ffbe0b', '#ff006e'][i]
                ]
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              {axis}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Rainbow Scanline Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 0, 110, 0.3) 20%,
            rgba(6, 255, 165, 0.4) 40%,
            rgba(58, 134, 255, 0.5) 50%,
            rgba(255, 190, 11, 0.4) 60%,
            rgba(131, 56, 236, 0.3) 80%,
            transparent 100%
          )`,
          width: '200%',
        }}
        animate={{
          x: ['-100%', '0%'],
        }}
        transition={{
          duration: 2.5,
          ease: 'linear',
          repeat: Infinity,
        }}
      />

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: ['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff', '#06ffa5'][i % 6],
              boxShadow: `0 0 8px ${['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff', '#06ffa5'][i % 6]}`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content overlay for readability */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/70" />
    </div>
  );
}