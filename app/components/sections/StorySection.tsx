"use client";

import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Database, Zap, Globe } from "lucide-react";

const timelineEvents = [
  { year: "2023", title: "Inception", description: "Founded by a team of ex-HFT engineers and mathematicians.", icon: Database },
  { year: "2024", title: "Breakthrough", description: "Developed our proprietary low-latency execution engine.", icon: Zap },
  { year: "2025", title: "Expansion", description: "Scaling strategies across global markets and asset classes.", icon: Globe },
];

const teamMembers = [
  { 
    name: "Alex Chen", 
    role: "Lead Quant", 
    image: "https://i.pravatar.cc/300?u=alex", 
  },
  { 
    name: "Sarah Jones", 
    role: "CTO", 
    image: "https://i.pravatar.cc/300?u=sarah", 
  },
  { 
    name: "David Kim", 
    role: "Head of Research", 
    image: "https://i.pravatar.cc/300?u=david", 
  },
];

export default function StorySection() {
  return (
    <section id="story" className="py-32 px-6 bg-black/40 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Story & Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            From a small garage to a global trading firm. We are driven by curiosity and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Timeline */}
          <div className="relative border-l border-white/10 ml-4 space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-10"
              >
                <div className="absolute -left-[20px] top-0 p-2 bg-[#020410] rounded-full border border-white/10">
                  <event.icon size={16} className="text-blue-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-blue-500 font-mono font-bold text-lg">{event.year}</span>
                  <h3 className="text-xl font-bold text-white">{event.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Team */}
          <div className="flex justify-center lg:justify-start gap-8 flex-wrap">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative mb-4 inline-block">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-white/10 relative z-10"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
