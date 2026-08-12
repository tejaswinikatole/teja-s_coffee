import React, { useEffect, useRef } from 'react';

export function ScrollBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const frameCount = 300;
    const currentFrame = (index: number) => (
      `/ezgif-3b2a83ac8e29d2b4-jpg/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
    );

    const images: HTMLImageElement[] = [];
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
    };

    preloadImages();

    let targetFrameIndex = 0;
    let currentFrameIndex = 0;
    let canvasSized = false;
    let animationFrameId: number;

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      
      if (maxScrollTop <= 0) return; // Prevent division by zero
      
      const scrollFraction = scrollTop / maxScrollTop;
      
      targetFrameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(scrollFraction * frameCount))
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set target frame based on initial scroll position
    handleScroll();

    const render = () => {
      // Easing for smooth scrolling animation
      currentFrameIndex += (targetFrameIndex - currentFrameIndex) * 0.1;
      const frameToDraw = Math.min(frameCount - 1, Math.max(0, Math.round(currentFrameIndex)));
      
      if (images[frameToDraw] && images[frameToDraw].complete) {
        if (!canvasSized && images[frameToDraw].width > 0) {
          canvas.width = images[frameToDraw].width;
          canvas.height = images[frameToDraw].height;
          canvasSized = true;
        }
        
        if (canvasSized) {
          context.drawImage(images[frameToDraw], 0, 0);
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-black">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover opacity-60" 
      />
    </div>
  );
}
