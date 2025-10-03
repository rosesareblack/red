import { motion } from 'framer-motion';

export function SiteBuilderShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-8 right-8 glass-effect p-4 rounded-2xl border border-white/10 backdrop-blur-md z-10"
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-white/80">Live Preview</span>
        </div>
        <div className="w-px h-4 bg-white/20" />
        <div className="text-xs text-accent-400 font-mono">
          bolt.new
        </div>
      </div>
    </motion.div>
  );
}