"use client";

import { portfolioData } from "@/data/portfolio-data";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

export function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Achievements</h2>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <div className="mt-1 bg-purple-500/20 p-2 rounded-full text-purple-400">
                  <Trophy className="h-5 w-5" />
                </div>
                <p className="text-lg text-gray-400">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
