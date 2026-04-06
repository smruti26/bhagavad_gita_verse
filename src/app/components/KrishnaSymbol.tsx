import { motion, AnimatePresence } from "motion/react";

export function KrishnaSymbol() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-8 left-1/2 -translate-x-1/2 pointer-events-none z-10"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Om symbol with Krishna colors */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          className="drop-shadow-2xl"
        >
          <defs>
            <linearGradient id="krishnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#fbbf24", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#f59e0b", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#d97706", stopOpacity: 1 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Om Symbol */}
          <text
            x="50"
            y="65"
            fontSize="60"
            fontFamily="serif"
            textAnchor="middle"
            fill="url(#krishnaGradient)"
            filter="url(#glow)"
            className="font-bold"
          >
            ॐ
          </text>
        </svg>
      </motion.div>
      
      {/* Subtle particles around the symbol */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          style={{
            left: "50%",
            top: "50%",
          }}
          animate={{
            x: [0, Math.cos(i * Math.PI / 4) * 40, 0],
            y: [0, Math.sin(i * Math.PI / 4) * 40, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
}
