import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TYPING_WORDS = [
  "React applications",
  "Vue.js projects", 
  "Next.js websites",
  "Node.js backends",
  "full-stack apps"
];

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8">
      {/* Grid system container */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Left column - Hero content */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-500/20 bg-accent-500/10 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span className="text-sm font-medium text-accent-400 tracking-wide">
                AI-POWERED DEVELOPMENT
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight"
              >
                <span className="block text-white">Build</span>
                <span className="block bg-gradient-to-r from-accent-400 via-accent-500 to-purple-500 bg-clip-text text-transparent">
                  {currentText}
                  <motion.span
                    className="inline-block w-0.5 h-[0.9em] bg-accent-500 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </span>
                <span className="block text-white">in seconds</span>
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl font-light"
            >
              The most powerful AI development assistant. From idea to deployment in one conversation.
              <span className="block mt-2 text-gray-500 text-lg">
                No setup. No configuration. Just pure creation.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl font-semibold text-white shadow-2xl shadow-accent-500/25 transition-all duration-300 hover:shadow-accent-500/40"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Start Building Now
                  <div className="i-ph:arrow-right-bold w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-white/20 rounded-2xl font-semibold text-white hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <div className="i-ph:play-circle-bold w-5 h-5" />
                  Watch Demo
                </span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              {[
                { value: '10M+', label: 'Projects Created' },
                { value: '500K+', label: 'Developers' },
                { value: '99.9%', label: 'Uptime' }
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Interactive preview */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Mock terminal/editor */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                
                {/* Terminal header */}
                <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="ml-4 text-sm text-gray-400 font-mono">
                      bolt-ai-assistant
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    CONNECTED
                  </div>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400"
                  >
                    <span className="text-accent-400">$</span> bolt create react-dashboard
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-2 text-gray-300"
                  >
                    <div className="flex items-center gap-2">
                      <div className="i-ph:check-circle-fill w-4 h-4 text-green-400" />
                      <span>Installing dependencies...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="i-ph:check-circle-fill w-4 h-4 text-green-400" />
                      <span>Setting up React + TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="i-ph:check-circle-fill w-4 h-4 text-green-400" />
                      <span>Configuring Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-4 h-4 border-2 border-accent-400 border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Deploying to production...</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="pt-4 border-t border-white/10"
                  >
                    <div className="text-green-400 font-semibold">
                      ✨ Project created successfully!
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      🚀 Available at: https://your-app.bolt.new
                    </div>
                  </motion.div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-500/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl shadow-xl"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-purple-500/40 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}