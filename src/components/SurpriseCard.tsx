"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function SurpriseCard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5,
        delayChildren: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
    show: { 
      opacity: 1, 
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" as const } 
    },
  };

  return (
    <section className="flex items-center justify-center px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-gold/5 to-dark pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1 }}
        className="glass-card rounded-3xl p-8 md:p-16 max-w-3xl w-full z-10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Gift className="w-32 h-32 text-gold" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          A Small Surprise <br />
          <span className="gold-gradient text-glow">For You</span>
        </h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 text-center text-lg md:text-2xl font-light text-gray-200"
        >
          <motion.p variants={textVariants}>
            &quot;As a small birthday gift,<br />
            we wanted to dedicate something meaningful.&quot;
          </motion.p>
          
          <motion.p variants={textVariants}>
            &quot;Today,<br />
            instead of giving a present...&quot;
          </motion.p>

          <motion.p variants={textVariants} className="text-gold font-medium text-xl md:text-3xl leading-relaxed mt-12">
            &quot;we&apos;re giving you<br />
            the privilege of publishing<br />
            the very first article.&quot;
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
