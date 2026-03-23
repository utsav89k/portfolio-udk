"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Preload images progressively
  useEffect(() => {
    // Prevent re-initialization
    if (imagesRef.current.length > 0) return;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      const frameIndex = i.toString().padStart(3, "0");
      
      // We prioritize loading the first few frames immediately
      img.src = `/sequence/frame_${frameIndex}_delay-0.066s.png`;
      
      img.onload = () => {
        if (i === 0) {
          setFirstFrameLoaded(true);
        }
      };
      
      imagesRef.current.push(img);
    }
  }, []);

  // 2. Render function for an image using object-fit: cover logic
  const renderFrame = (index: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    // If the image hasn't finished downloading over the network, wait and display the previous frame
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Responsive Canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Object-fit: cover calculation
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);

    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  // 3. Render initial frame as soon as it's loaded
  useEffect(() => {
    if (firstFrameLoaded) {
      renderFrame(0);
    }
    
    // Update on resize
    const handleResize = () => {
      const currentScroll = scrollYProgress.get();
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(currentScroll * FRAME_COUNT))
      );
      renderFrame(frameIndex);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [firstFrameLoaded]);

  // 4. Update canvas as we scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * FRAME_COUNT))
    );
    renderFrame(frameIndex);
  });

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full bg-brand-bg">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Fallback color/loader could go here before firstFrameLoaded becomes true */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${firstFrameLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Dark gradient overlay at the bottom so it fades nicely into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg/30 pointer-events-none" />
      </div>
    </div>
  );
}
