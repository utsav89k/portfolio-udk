"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We use the same 500vh container logic, tracking its scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- SECTION 1 ---
  // Appears at 0%, starts fading out quickly so 2 can appear
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // --- SECTION 2 ---
  // Appears very early now
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.1, 0.4], [100, -100]);

  // --- SECTION 3 ---
  // Appears earlier before the black screen entirely consumes the image
  const opacity3 = useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.35, 0.75], [100, -100]);

  return (
    <div ref={containerRef} className="absolute inset-0 h-[200vh] w-full pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-20 overflow-hidden text-white">
        
        {/* Section 1: Split Screen Layout */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* Left Side: Name */}
          <div className="absolute left-6 md:left-[10%] xl:left-[15%] top-1/2 -translate-y-1/2 flex flex-col items-start text-left z-20">
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-base md:text-lg lg:text-xl font-medium tracking-wider text-brand-teal mb-2"
            >
              Hello! I'm
            </motion.p>
            <motion.h1 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-widest leading-[1.1] text-white"
            >
              UTSAV<br />KANANI
            </motion.h1>
          </div>

          {/* Right Side: Role */}
          <div className="absolute right-6 md:right-10 lg:right-20 top-1/2 -translate-y-1/2 flex flex-col items-start text-left z-20 mt-28 md:mt-0 w-auto">
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative text-left"
            >
              {/* Backglow / Shadow effect on text behind */}
              <h2 className="absolute top-0 md:top-[-8px] left-0 text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-widest leading-none text-brand-teal/20 blur-sm uppercase select-none pointer-events-none whitespace-nowrap">
                DATA<br/>ENGINEER
              </h2>
              <h2 className="relative text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-widest leading-none text-white uppercase drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] mt-2 md:mt-3 whitespace-nowrap">
                DATA<br/>ENGINEER
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-base md:text-lg lg:text-xl font-bold tracking-wider text-brand-teal mt-4 mb-2"
            >
              And
            </motion.p>
            
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative text-left"
            >
              {/* Backglow / Shadow effect on text behind */}
              <h2 className="absolute top-0 md:top-[-8px] left-0 text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-widest leading-none text-brand-teal/20 blur-sm uppercase select-none pointer-events-none whitespace-nowrap">
                ANALYST
              </h2>
              <h2 className="relative text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-widest leading-none text-white uppercase drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] mt-2 md:mt-3 whitespace-nowrap">
                ANALYST
              </h2>
            </motion.div>
          </div>
          
          {/* Bottom Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-sm tracking-widest text-brand-teal/80 uppercase">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-brand-teal to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Section 2: Left Aligned */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.2]">
            I build data infrastructure that scales with your <span className="relative inline-block text-brand-teal">business.
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[0.1em] bg-brand-teal rounded-full shadow-[0_0_10px_rgba(0,255,204,0.8)]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ originX: 0 }}
              />
            </span>
          </h2>
        </motion.div>

        {/* Section 3: Right Aligned and Lower */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute flex items-end justify-end inset-0 p-6 md:p-20 pointer-events-none"
        >
          <div className="max-w-4xl text-right mb-20 md:mb-32">
            <h2 className="text-3xl md:text-5xl font-light italic leading-relaxed text-gray-200">
              "Turning raw data into <span className="text-brand-purple font-semibold drop-shadow-[0_0_15px_rgba(123,97,255,0.5)]">meaningful insights</span>,<br className="hidden md:block"/> one pipeline at a time."
            </h2>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
