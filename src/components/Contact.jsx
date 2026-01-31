"use client";

import { portfolioData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
          <p className="text-gray-400 text-lg">
            I&apos;m currently seeking internships and entry-level remote roles. 
            If you have an interesting project or just want to say hi, feel free to reach out!
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {contact.socials.map((social) => {
              const Icon = social.icon;
              return (
                <Button key={social.label} variant="outline" size="lg" asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="mr-2 h-5 w-5" />
                    {social.label}
                  </a>
                </Button>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-2 pt-4">
            <span className="text-gray-400">{contact.email}</span>
            <Button variant="ghost" size="icon" onClick={copyEmail} aria-label="Copy email">
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
