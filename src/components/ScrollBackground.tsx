import { useEffect, useRef } from 'react';

export function ScrollBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const frameCount = 300;
    const currentFrame = (index: number) =>
      `/ezgif-3b2a83ac8e29d2b4-jpg/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

    const images: HTMLImageElement[] = [];

    // Preload images progressively — load first 30 immediately for fast first paint
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
    let animationFrameId: number;
    let lastDrawnFrame = -1;

    // Resize canvas to match viewport so object-fit works correctly on mobile
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-draw immediately after resize
      const frameToDraw = Math.min(frameCount - 1, Math.max(0, Math.round(currentFrameIndex)));
      if (images[frameToDraw]?.complete && images[frameToDraw].width > 0) {
        drawFrame(frameToDraw);
      }
    };

    const drawFrame = (index: number) => {
      const img = images[index];
      if (!img?.complete || img.width === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      // Cover fit: scale up to fill, centered
      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cw - sw) / 2;
      const sy = (ch - sh) / 2;

      context.clearRect(0, 0, cw, ch);
      context.drawImage(img, sx, sy, sw, sh);
    };

    // Use window.scrollY (works on all browsers including mobile Safari)
    const handleScroll = () => {
      // Support both document scroll and body scroll (iOS quirks)
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      const maxScroll = docHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      const scrollFraction = Math.min(1, Math.max(0, scrollTop / maxScroll));

      targetFrameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
    };

    // Listen on both window and document for maximum mobile compatibility
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Initial size + scroll position
    resizeCanvas();
    handleScroll();

    const render = () => {
      // Smooth lerp — slightly faster (0.12) for snappier mobile feel
      currentFrameIndex += (targetFrameIndex - currentFrameIndex) * 0.12;
      const frameToDraw = Math.min(frameCount - 1, Math.max(0, Math.round(currentFrameIndex)));

      // Only redraw if frame changed — saves GPU on mobile
      if (frameToDraw !== lastDrawnFrame) {
        drawFrame(frameToDraw);
        lastDrawnFrame = frameToDraw;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full -z-50 bg-black"
      style={{ touchAction: 'pan-y' }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          opacity: 0.65,
          willChange: 'contents',
        }}
      />
    </div>
  );
}
