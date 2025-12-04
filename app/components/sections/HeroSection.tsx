"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Circuit Board Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L50 10 L50 50 L90 50' stroke='%233b82f6' stroke-width='1' fill='none'/%3E%3Cpath d='M10 90 L50 90 L50 50' stroke='%233b82f6' stroke-width='1' fill='none'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%233b82f6'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%233b82f6'/%3E%3Ccircle cx='10' cy='90' r='2' fill='%233b82f6'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      
      {/* Glow Effects */}
      <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4">
            Defining the Future <br />
            with Algorithms
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8"
        >
          High-Frequency Quantitative Trading Team focused on low <br className="hidden md:block" />
          latency and high Sharpe ratio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="pt-8">
            <button 
              className="relative cursor-pointer px-8 py-3.5 rounded-lg group overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              onClick={() => {
                document.getElementById("performance")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4394F8] to-[#6366F1]"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#3B82F6] to-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative font-bold text-white text-lg flex items-center gap-2">
                View Performance
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
