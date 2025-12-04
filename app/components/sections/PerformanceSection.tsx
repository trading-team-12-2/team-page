"use client";

import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { BarChart3, TrendingUp, Activity, ShieldCheck } from "lucide-react";

// Lazy load the chart
const EquityChart = dynamic(() => import("../charts/EquityChart"), { 
  ssr: false,
  loading: () => <div className="h-[400px] w-full flex items-center justify-center text-default-500">Loading Chart...</div>
});

const stats = [
  { label: "Total PnL", value: "+320%", color: "text-white", icon: BarChart3, subtext: "text-blue-400" },
  { label: "Win Rate", value: "68.5%", color: "text-white", icon: Activity, subtext: "text-emerald-400" },
  { label: "Max Drawdown", value: "-4.2%", color: "text-white", icon: TrendingUp, subtext: "text-rose-400" },
  { label: "Sharpe Ratio", value: "3.8", color: "text-white", icon: ShieldCheck, subtext: "text-indigo-400" },
];

export default function PerformanceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="performance" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Performance</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Consistent returns with strict risk management. Our algorithms perform in all market conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-[#11131f]/80 backdrop-blur-md border border-white/5 shadow-xl rounded-2xl">
                <CardBody className="flex flex-row items-center gap-4 p-6">
                  <div className={`p-3 rounded-xl bg-white/5 ${stat.subtext}`}>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wider">{stat.label}</p>
                    <p className={`text-2xl font-mono font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#11131f]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8"
        >
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">Equity Curve (2024)</h3>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs text-gray-400">Total Equity</span>
            </div>
          </div>
          {isInView && <EquityChart />}
          
          {/* SEO Table for Chart Data */}
          <div className="sr-only">
            <table>
              <caption>Monthly Equity Performance 2024</caption>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Equity</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Jan</td><td>100</td></tr>
                <tr><td>Feb</td><td>120</td></tr>
                <tr><td>Mar</td><td>115</td></tr>
                <tr><td>Apr</td><td>134</td></tr>
                <tr><td>May</td><td>160</td></tr>
                <tr><td>Jun</td><td>190</td></tr>
                <tr><td>Jul</td><td>210</td></tr>
                <tr><td>Aug</td><td>200</td></tr>
                <tr><td>Sep</td><td>230</td></tr>
                <tr><td>Oct</td><td>250</td></tr>
                <tr><td>Nov</td><td>280</td></tr>
                <tr><td>Dec</td><td>320</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
