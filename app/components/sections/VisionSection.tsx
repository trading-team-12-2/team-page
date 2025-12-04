"use client";

import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Deep Learning",
    description: "Leveraging transformer models to predict market microstructure with unprecedented accuracy.",
    icon: "🧠"
  },
  {
    title: "Cross-Market Arbitrage",
    description: "Instantaneously capturing inefficiencies across 50+ exchanges worldwide.",
    icon: "🌐"
  },
  {
    title: "DeFi Integration",
    description: "Bridging the gap between CeFi liquidity and DeFi innovation.",
    icon: "🔗"
  }
];

export default function VisionSection() {
  return (
    <section id="vision" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Vision & Future</h2>
          <p className="text-default-500 max-w-2xl mx-auto">
            We are not just trading; we are building the infrastructure of tomorrow's financial markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-[#1a1d3d] to-[#0f1125] border border-white/5 hover:border-blue-500/30 transition-all shadow-lg rounded-3xl">
                <CardBody className="p-8">
                  <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
