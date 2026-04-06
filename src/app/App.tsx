import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SolarSystem } from "./components/SolarSystem";
import { VerseCard } from "./components/VerseCard";
import { KrishnaSymbol } from "./components/KrishnaSymbol";
import { verses } from "./data/verses-data";
import { Sparkles, RotateCw } from "lucide-react";

export default function App() {
  const [currentVerse, setCurrentVerse] = useState<typeof verses[0] | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateVerse = () => {
    setIsGenerating(true);
    
    // Add a small delay for better UX
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * verses.length);
      setCurrentVerse(verses[randomIndex]);
      setIsGenerating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated solar system background */}
      <SolarSystem />

      {/* Krishna Om symbol */}
      <KrishnaSymbol />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-light text-white mb-3 tracking-wide"
            animate={{
              textShadow: [
                "0 0 20px rgba(251, 191, 36, 0.3)",
                "0 0 30px rgba(251, 191, 36, 0.5)",
                "0 0 20px rgba(251, 191, 36, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Divine Wisdom
          </motion.h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto">
            Find peace, clarity, and guidance through the timeless teachings of the Bhagavad Gita
          </p>
        </motion.div>

        {/* Verse display */}
        <div className="w-full max-w-4xl mb-8">
          <AnimatePresence mode="wait">
            {currentVerse ? (
              <VerseCard key={currentVerse.id} verse={currentVerse} />
            ) : (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="text-center py-20"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block mb-6"
                >
                  <Sparkles className="w-16 h-16 text-yellow-300 drop-shadow-lg" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl text-white/90 font-light mb-4">
                  Welcome, Seeker
                </h2>
                <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
                  Click the button below to receive divine guidance for your journey
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Generate button */}
        <motion.button
          onClick={generateVerse}
          disabled={isGenerating}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          {/* Glowing effect */}
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full blur-lg opacity-60"
            animate={{
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Button */}
          <div className="relative px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full shadow-2xl flex items-center gap-3">
            <motion.div
              animate={isGenerating ? { rotate: 360 } : {}}
              transition={{
                duration: 1,
                repeat: isGenerating ? Infinity : 0,
                ease: "linear",
              }}
            >
              {isGenerating ? (
                <RotateCw className="w-5 h-5 text-white" />
              ) : (
                <Sparkles className="w-5 h-5 text-white" />
              )}
            </motion.div>
            <span className="text-white font-medium text-lg">
              {currentVerse
                ? "Generate Another Verse"
                : "Generate Verse"}
            </span>
          </div>
        </motion.button>

        {/* Footer message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-white/40 text-sm mt-12 text-center max-w-lg"
        >
          Each verse is carefully selected to provide comfort, guidance, and peace for those dealing with life's challenges. May these words bring light to your path.
        </motion.p>
      </div>

      {/* Ambient light effects */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>
    </div>
  );
}
