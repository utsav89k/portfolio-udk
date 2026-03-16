"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-brand-bg relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="w-12 h-[2px] bg-brand-purple"></span>
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Card Container */ }
              <div className="flex flex-col h-full bg-brand-card/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:border-brand-teal/50 hover:shadow-[0_0_30px_rgba(0,255,204,0.15)] overflow-hidden">
                
                {/* Top decorative gradient */ }
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple/50 to-brand-teal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-teal transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-purple"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-teal text-brand-teal font-medium transition-all duration-300 hover:bg-brand-teal hover:text-brand-bg hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] clickable"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  )}
                  
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-teal text-brand-bg font-bold transition-all duration-300 hover:bg-brand-teal/90 hover:shadow-[0_0_20px_rgba(0,255,204,0.6)] clickable"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
