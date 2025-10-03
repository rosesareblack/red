import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-background">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)
          `,
        }}
        animate={{
          background: [
            `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)
            `,
            `
              radial-gradient(circle at 80% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 20% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 60% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
              linear-gradient(225deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)
            `,
            `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)
            `,
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 border border-blue-500/20 rounded-lg"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 180, 360],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
        }}
      />

      <motion.div
        className="absolute top-1/2 right-32 w-16 h-16 border-2 border-green-500/30 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          x: [-5, 5, -5],
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Code-like elements floating */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-blue-500/20 font-mono text-sm"
        animate={{
          y: [-5, 5, -5],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {'<div className="site-builder">'}
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/4 text-purple-500/20 font-mono text-sm"
        animate={{
          y: [5, -5, 5],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        {'</div>'}
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 text-green-500/20 font-mono text-xs"
        animate={{
          x: [-3, 3, -3],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        {'npm run build'}
      </motion.div>
    </div>
  );
}