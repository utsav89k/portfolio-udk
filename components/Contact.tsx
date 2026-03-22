"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, FileText, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="text-brand-teal" size={24} />,
      title: "Email",
      value: "utsavkanani822@gmail.com",
      href: "mailto:utsavkanani822@gmail.com"
    },
    {
      icon: <Linkedin className="text-brand-teal" size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/utsav-kanani-027b69215",
      href: "https://linkedin.com/in/utsav-kanani-027b69215"
    },
    {
      icon: <FileText className="text-brand-teal" size={24} />,
      title: "Resume",
      value: "View Document",
      href: "https://drive.google.com/file/d/1FV7gSLwmAOtqZdGkpOsnU9FKoI9N4EFv/view?usp=sharing"
    },
    {
      icon: <Phone className="text-brand-teal" size={24} />,
      title: "Phone",
      value: "(682) 377-9583",
      href: "tel:+16823779583"
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    window.location.href = `mailto:utsavkanani822@gmail.com?subject=Portfolio Inquiry from ${name}&body=${message} (%0A%0A sender email: ${email})`;
  };

  return (
    <section id="contact" className="relative py-32 bg-brand-bg overflow-hidden flex items-center justify-center">
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

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white text-center"
        >
          Let's Build Something <span className="text-brand-purple">Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-300 font-light mb-16 text-center max-w-2xl mx-auto"
        >
          Open to full-time roles, freelance projects, and collaborations.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Column: Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glow-card bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <h3 className="text-3xl font-bold text-brand-teal mb-8">Get in Touch</h3>
            
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.href}
                  target={info.title === "Resume" || info.title === "LinkedIn" ? "_blank" : undefined}
                  rel={info.title === "Resume" || info.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-teal/30 hover:bg-white/10 transition-all duration-300 group clickable"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-white font-semibold text-lg">{info.title}</span>
                    <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors truncate">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glow-card bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col"
          >
            <h3 className="text-3xl font-bold text-brand-teal mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-grow">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  placeholder="Enter your name" 
                  className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  placeholder="your.email@example.com" 
                  className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2 flex-grow">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  placeholder="Tell me about your project or opportunity..." 
                  className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal/50 transition-all min-h-[150px] resize-none flex-grow"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-brand-teal hover:bg-brand-teal/90 text-[#0a0f1e] font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] hover:scale-[1.02] clickable"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
