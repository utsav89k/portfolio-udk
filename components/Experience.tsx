"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-20 bg-brand-bg relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="w-12 h-[2px] bg-brand-teal"></span>
          Experience
        </motion.h2>

        <div className="space-y-12 pl-4 md:pl-0 border-l-2 md:border-none border-white/10">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.3) }}
              className="relative md:flex items-start gap-8 group"
            >
              {/* Timeline dot (desktop) */}
              <div className="hidden md:flex flex-col items-center mt-2">
                <div className="w-4 h-4 rounded-full bg-brand-teal shadow-[0_0_15px_rgba(0,255,204,0.6)] z-10 group-hover:scale-150 transition-transform duration-300" />
                {index !== experience.length - 1 && (
                  <div className="w-[2px] h-[calc(100%+3rem)] bg-white/10 absolute top-6 left-[7px]" />
                )}
              </div>
              
              {/* Timeline dot (mobile) */}
              <div className="md:hidden absolute -left-[21px] top-6 w-3 h-3 rounded-full bg-brand-teal shadow-[0_0_10px_rgba(0,255,204,0.6)]" />

              <div className="flex-1 glow-card bg-brand-card/80 backdrop-blur-md border border-white/10 border-l-4 border-l-brand-teal rounded-2xl p-6 md:p-8 ml-4 md:ml-0 relative overflow-hidden">
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white relative inline-block">
                      {exp.role}
                    </h3>
                    <p className="text-brand-teal mt-1 text-lg font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-600 inline-block" />
                      {exp.location}
                    </p>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 text-gray-300 font-light text-sm md:text-base">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-brand-teal font-bold mt-0.5 opacity-60">▹</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
