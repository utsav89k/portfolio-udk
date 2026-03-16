"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowRight, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-brand-bg overflow-hidden">
      {/* Animated gradient pulse background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-teal/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-purple/20 blur-[150px]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white"
        >
          Let's Build Something <span className="text-brand-purple">Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-300 font-light mb-16 max-w-2xl mx-auto"
        >
          Open to full-time roles, freelance projects, and collaborations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
        >
          <a
            href="mailto:utsavkanani822@gmail.com"
            className="group flex items-center justify-center gap-3 px-8 py-4 w-full md:w-auto rounded-full bg-brand-teal text-brand-bg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,204,0.6)] clickable"
          >
            <Mail size={20} />
            <span>Send a Message</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="tel:+16823779583"
            className="flex items-center justify-center gap-3 px-8 py-4 w-full md:w-auto rounded-full bg-white/5 border border-white/10 text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-brand-teal/50 clickable"
          >
            <Phone size={20} className="text-brand-teal" />
            <span>(682) 377-9583</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-8"
        >
          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1FV7gSLwmAOtqZdGkpOsnU9FKoI9N4EFv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group clickable"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-teal group-hover:bg-brand-teal/10 transition-all duration-300 group-hover:-translate-y-1">
              <FileText size={28} />
            </div>
            <span className="text-sm font-medium">Resume</span>
          </a>
          
          {/* GitHub */}
          <a
            href="https://github.com/utsav89k"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group clickable"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-purple group-hover:bg-brand-purple/10 transition-all duration-300 group-hover:-translate-y-1">
              <Github size={28} />
            </div>
            <span className="text-sm font-medium">GitHub</span>
          </a>
          
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/utsav-kanani-027b69215"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group clickable"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#0077b5] group-hover:bg-[#0077b5]/10 transition-all duration-300 group-hover:-translate-y-1">
              <Linkedin size={28} />
            </div>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
