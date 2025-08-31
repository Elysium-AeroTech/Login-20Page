import React, { useEffect, useRef } from "react";

export default function CodeRain({
  className = "",
  density = 14,
}: {
  className?: string;
  density?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const setSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();

    const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&".split("");
    const columnWidth = density;
    const columns = Math.ceil(width / columnWidth);
    const drops = new Array(columns)
      .fill(0)
      .map(() => Math.floor(Math.random() * -50));

    const bgFade = () => {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, width, height);
    };

    const draw = () => {
      bgFade();
      for (let i = 0; i < drops.length; i++) {
        const x = i * columnWidth + 2;
        const y = drops[i] * (columnWidth + 2);
        const char = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.font = `600 ${columnWidth}px Orbitron, Inter, ui-sans-serif`;
        ctx.fillStyle = "rgba(0,255,170,0.9)";
        ctx.shadowColor = "rgba(0,255,170,0.6)";
        ctx.shadowBlur = 8;
        ctx.fillText(char, x, y);
        drops[i]++;
        if (y > height && Math.random() > 0.975)
          drops[i] = Math.floor(Math.random() * -30);
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const onResize = () => {
      cancelAnimationFrame(rafRef.current || 0);
      setSize();
      rafRef.current = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={`block ${className}`} />;
}
