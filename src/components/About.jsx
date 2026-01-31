"use client";

import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";

export function About() {
  const { bio } = portfolioData.about;

  return (
    <section id="about" className="py-24 md:py-32 bg-white/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-8 sm:text-4xl">About Me</h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            {bio}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
