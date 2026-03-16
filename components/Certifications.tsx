"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Image from "next/image";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-20 bg-brand-bg relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="w-12 h-[2px] bg-brand-purple"></span>
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex flex-col h-full bg-brand-card/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 transition-all duration-300 hover:border-brand-purple/50 hover:bg-brand-card/60 hover:shadow-[0_0_30px_rgba(123,97,255,0.15)] hover:-translate-y-1">
                
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {cert.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  Issued by <span className="text-gray-200">{cert.issuer}</span>
                </p>
                
                <div className="mt-auto">
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-purple transition-colors hover:text-brand-purple/80 group-hover:underline clickable"
                  >
                    Verify Credential <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
