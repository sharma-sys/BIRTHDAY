"use client";

import { motion } from "framer-motion";
import { Lightbulb, Wrench, Crown, Rocket, Star } from "lucide-react";

export default function Timeline() {
  const steps = [
    { label: "Idea", icon: Lightbulb },
    { label: "Hard Work", icon: Wrench },
    { label: "Leadership", icon: Crown },
    { label: "Innovation", icon: Rocket },
    { label: "Impact", icon: Star },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="timeline" className="flex flex-col items-center justify-center px-6 relative">
      {/* Subtle glowing illustration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
          className="w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full border border-gold/10 opacity-30"
          style={{ background: "conic-gradient(from 90deg at 50% 50%, rgba(255, 209, 102, 0) 0%, rgba(255, 209, 102, 0.1) 50%, rgba(255, 209, 102, 0) 100%)" }}
        />
      </div>

      <div className="z-10 w-full max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-20"
        >
          Every Great Product <br className="md:hidden" />
          <span className="gold-gradient text-glow">Starts With One Vision</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center justify-between relative w-full mb-20"
        >
          {/* Connecting line */}
          <div className="absolute left-1/2 md:left-0 md:top-1/2 w-0.5 h-full md:w-full md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-dark via-gold/50 to-dark -translate-x-1/2 md:-translate-y-1/2 md:translate-x-0 -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.label} 
                variants={itemVariants}
                className="flex flex-col items-center group my-6 md:my-0 bg-dark p-4 rounded-xl"
              >
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-gold/50 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,209,102,0.5)]">
                  <Icon className="w-6 h-6 text-gray-300 group-hover:text-gold transition-colors" />
                </div>
                <span className="text-sm md:text-base font-medium tracking-wide text-gray-400 group-hover:text-white transition-colors">
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <ArrowDownIcon className="w-4 h-4 text-gold/50 mt-6 animate-pulse md:hidden" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl text-gray-400 italic max-w-2xl mx-auto"
        >
          &quot;Your vision continues to inspire every member of the team.&quot;
        </motion.p>
      </div>
    </section>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}
