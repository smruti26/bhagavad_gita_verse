import { motion } from "motion/react";
import { Verse } from "../data/verses-data";
import { BookOpen, Heart, Lightbulb } from "lucide-react";

interface VerseCardProps {
  verse: Verse;
}

export function VerseCard({ verse }: VerseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative max-w-3xl w-full mx-auto"
    >
      {/* Glowing background effect */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-2xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main card */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Top decorative bar */}
        <div className="h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400" />

        {/* Content */}
        <div className="p-8 md:p-10 space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-orange-300 font-semibold text-sm">
                  Bhagavad Gita
                </p>
                <p className="text-white/60 text-sm">
                  Chapter {verse.chapter}, Verse {verse.verse}
                </p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              {verse.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-500/30 backdrop-blur-sm rounded-full text-xs text-purple-200 border border-purple-400/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Sanskrit verse */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <p className="text-orange-200 font-light text-sm tracking-wider">
              Sanskrit
            </p>
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
              {verse.sanskrit}
            </p>
          </motion.div>

          {/* Translation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2 border-t border-white/10 pt-6"
          >
            <p className="text-blue-200 font-light text-sm tracking-wider">
              Translation
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              {verse.translation}
            </p>
          </motion.div>

          {/* Meaning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-3 bg-white/5 rounded-xl p-5 border border-white/10"
          >
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-400" />
              <p className="text-pink-200 font-medium text-sm">
                Meaning
              </p>
            </div>
            <p className="text-white/80 leading-relaxed">
              {verse.meaning}
            </p>
          </motion.div>

          {/* Practical guidance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3 bg-gradient-to-br from-purple-500/10 to-orange-500/10 rounded-xl p-5 border border-purple-400/20"
          >
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <p className="text-yellow-200 font-medium text-sm">
                Practical Guidance
              </p>
            </div>
            <p className="text-white/90 leading-relaxed font-light">
              {verse.practicalGuidance}
            </p>
          </motion.div>

          {/* Tags */}
          {verse.tags.length > 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {verse.tags.slice(2).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-indigo-500/20 backdrop-blur-sm rounded-full text-xs text-indigo-200 border border-indigo-400/20"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        {/* Bottom decorative element */}
        <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50" />
      </div>
    </motion.div>
  );
}
