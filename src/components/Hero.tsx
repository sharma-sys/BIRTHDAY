"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="flex flex-col items-center justify-center text-center px-6 relative">
      {/* Background abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl z-10"
      >
        <motion.div variants={item} className="mb-6">
          <span className="text-6xl md:text-7xl mb-4 block">🎉</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
            Happy Birthday
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-glow gold-gradient">
            SOURAV SIR
          </h1>
        </motion.div>

        <motion.p variants={item} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
          &quot;Today isn&apos;t just another day. <br className="hidden md:block" />
          It&apos;s the celebration of the person who transformed ideas into reality.&quot;
        </motion.p>

        <motion.div variants={item} className="mb-16">
          <p className="text-sm md:text-base text-gold tracking-widest uppercase opacity-80">
            &quot;Thank you for inspiring us every single day.&quot;
          </p>
        </motion.div>

        <motion.button
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const nextSection = document.getElementById("timeline");
            nextSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex flex-col items-center gap-2 mx-auto text-gray-400 hover:text-gold transition-colors duration-300"
        >
          <span className="text-sm tracking-widest uppercase">Continue</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-glow" />
        </motion.button>
      </motion.div>
    </section>
  );
}
