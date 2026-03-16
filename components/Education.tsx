"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-20 bg-brand-bg relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="w-12 h-[2px] bg-brand-purple"></span>
          Education
        </motion.h2>

        <div className="space-y-12 pl-4 md:pl-0 border-l-2 md:border-none border-white/10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative md:flex items-start gap-8 group"
            >
              {/* Timeline dot (desktop) */}
              <div className="hidden md:flex flex-col items-center mt-2">
                <div className="w-4 h-4 rounded-full bg-brand-purple shadow-[0_0_15px_rgba(123,97,255,0.6)] z-10" />
                {index !== education.length - 1 && (
                  <div className="w-[2px] h-full bg-white/10 absolute top-6 left-[7px]" />
                )}
              </div>
              
              {/* Timeline dot (mobile) */}
              <div className="md:hidden absolute -left-[21px] top-6 w-3 h-3 rounded-full bg-brand-purple shadow-[0_0_10px_rgba(123,97,255,0.6)]" />

              <div className="flex-1 glow-card bg-white/5 backdrop-blur-md border border-white/10 border-l-4 border-l-brand-purple rounded-2xl p-6 md:p-8 ml-4 md:ml-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white relative inline-block group-hover:text-brand-teal transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-brand-purple mt-1 text-lg">{edu.degree}</p>
                    <p className="text-gray-400 text-sm">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-medium border border-white/5">
                      {edu.graduated}
                    </span>
                    {edu.gpa && <p className="text-brand-teal text-sm mt-2 font-mono ml-2 md:ml-0 md:text-right">GPA: {edu.gpa}</p>}
                  </div>
                </div>
                
                {edu.courses.length > 0 && (
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-sm text-gray-400 mb-2">Key Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span key={course} className="text-xs px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
