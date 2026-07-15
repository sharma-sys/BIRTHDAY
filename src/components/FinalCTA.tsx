"use client";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTriggered = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          const duration = 3000;
          const end = Date.now() + duration;

          const frame = () => {
            confetti({
              particleCount: 5,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: ["#FFD166", "#ffffff"]
            });
            confetti({
              particleCount: 5,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: ["#FFD166", "#ffffff"]
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          };
          frame();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Celebration particles background */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: [0, 0.5, 0], y: "-100%" }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear" as const
            }}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              filter: "blur(1px)"
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        className="z-10 text-center max-w-3xl flex flex-col items-center"
      >
        <span className="text-6xl md:text-8xl mb-8 block animate-bounce">🚀</span>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          The First Story <br />
          <span className="gold-gradient text-glow">Begins With You</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Every great platform deserves a first voice.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          We would be honored if the very first article published on our CMS comes from you.
        </p>

        <a 
          href="https://YOUR-CMS-LINK" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative inline-flex group"
        >
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#FFD166] to-[#FFA000] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-dark transition-all duration-200 bg-gold font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            <Sparkles className="w-5 h-5" />
            Publish the First Article
            <ExternalLink className="w-5 h-5 ml-2" />
          </motion.button>
        </a>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-xl font-medium text-gray-400"
        >
          Happy Birthday ❤️
        </motion.p>
      </motion.div>
    </section>
  );
}
