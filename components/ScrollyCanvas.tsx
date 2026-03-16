"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Preload all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      // Format: frame_000_delay-0.066s.png to frame_119_delay-0.066s.png
      const frameIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameIndex}_delay-0.066s.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      
      loadedImages.push(img);
    }
  }, []);

  // 2. Render function for an image using object-fit: cover logic
  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length !== FRAME_COUNT) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img || !img.complete) return;

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

  // 3. Render initial frame once images are loaded
  useEffect(() => {
    if (images.length === FRAME_COUNT) {
      renderFrame(0);
    }
    
    // Update on resize
    const handleResize = () => {
      // Re-render current frame based on scroll position
      const currentScroll = scrollYProgress.get();
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(currentScroll * FRAME_COUNT))
      );
      renderFrame(frameIndex);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

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
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        
        {/* Dark gradient overlay at the bottom so it fades nicely into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg/30 pointer-events-none" />
      </div>
    </div>
  );
}
