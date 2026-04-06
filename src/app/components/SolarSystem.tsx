import { motion } from "motion/react";

export function SolarSystem() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-900" />
      
      {/* Stars */}
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central Sun */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-32 h-32 bg-gradient-to-br from-yellow-200 via-orange-300 to-orange-500 rounded-full blur-xl opacity-60" />
        <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-600 rounded-full blur-md" />
      </motion.div>

      {/* Orbiting planets */}
      {[
        { size: 12, distance: 120, duration: 15, color: "from-blue-400 to-blue-600", delay: 0 },
        { size: 16, distance: 180, duration: 25, color: "from-purple-400 to-purple-600", delay: 3 },
        { size: 10, distance: 240, duration: 35, color: "from-pink-400 to-pink-600", delay: 7 },
        { size: 14, distance: 300, duration: 45, color: "from-indigo-400 to-indigo-600", delay: 10 },
      ].map((planet, index) => (
        <motion.div
          key={index}
          className="absolute top-1/2 left-1/2"
          style={{
            width: planet.distance * 2,
            height: planet.distance * 2,
            marginLeft: -planet.distance,
            marginTop: -planet.distance,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: planet.duration,
            repeat: Infinity,
            ease: "linear",
            delay: planet.delay,
          }}
        >
          <motion.div
            className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br ${planet.color} rounded-full`}
            style={{
              width: planet.size,
              height: planet.size,
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
