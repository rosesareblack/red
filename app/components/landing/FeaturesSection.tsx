import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: 'i-ph:lightning-fill',
    title: 'Instant Deployment',
    description: 'From concept to live URL in under 30 seconds. Zero configuration, maximum velocity.',
    stats: '< 30s',
    highlight: 'lightning-fast'
  },
  {
    icon: 'i-ph:brain-fill', 
    title: 'AI Code Generation',
    description: 'Advanced language models that understand context, patterns, and best practices.',
    stats: '99.9%',
    highlight: 'accuracy'
  },
  {
    icon: 'i-ph:stack-fill',
    title: 'Full Stack Support',
    description: 'React, Vue, Next.js, Node.js, Python, and 50+ frameworks out of the box.',
    stats: '50+',
    highlight: 'frameworks'
  },
  {
    icon: 'i-ph:git-branch-fill',
    title: 'Version Control',
    description: 'Built-in Git integration with automatic commits and deployment previews.',
    stats: '100%',
    highlight: 'integrated'
  },
  {
    icon: 'i-ph:shield-check-fill',
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with end-to-end encryption and GDPR compliance.',
    stats: 'SOC 2',
    highlight: 'certified'
  },
  {
    icon: 'i-ph:users-three-fill',
    title: 'Team Collaboration',
    description: 'Real-time collaboration with live cursors, comments, and shared workspaces.',
    stats: 'Realtime',
    highlight: 'collaboration'
  }
];

export function FeaturesSection() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />
      
      {/* Grid container */}
      <div className="relative w-full max-w-7xl mx-auto">
        
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-500/20 bg-accent-500/10 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent-500" />
            <span className="text-sm font-medium text-accent-400 tracking-wide">
              POWERFUL FEATURES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Everything you need to
            <span className="block bg-gradient-to-r from-accent-400 via-accent-500 to-purple-500 bg-clip-text text-transparent">
              ship faster
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Professional-grade development tools powered by AI. 
            <span className="block mt-2">
              Built for teams that demand excellence and speed.
            </span>
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-accent-500/30 transition-all duration-300 hover:bg-gray-900/60">
                
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center border border-accent-500/20 group-hover:border-accent-500/40 transition-all duration-300">
                    <div className={`${feature.icon} w-8 h-8 text-accent-400 group-hover:text-accent-300 transition-colors duration-300`} />
                  </div>
                  
                  {/* Stats badge */}
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-accent-500/20 backdrop-blur-sm rounded-full border border-accent-500/30">
                    <span className="text-xs font-bold text-accent-400">
                      {feature.stats}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Highlight */}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-1 h-1 rounded-full bg-accent-500" />
                    <span className="text-sm font-medium text-accent-400 uppercase tracking-wide">
                      {feature.highlight}
                    </span>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Border glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{
                       background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                       filter: 'blur(1px)'
                     }} 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-gray-900/60 via-gray-900/80 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/10">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to experience the future?
              </h3>
              <p className="text-gray-400">
                Join 500,000+ developers building faster with AI
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl font-semibold text-white shadow-2xl shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-300 whitespace-nowrap"
            >
              Start Building Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}