import React, { useEffect, useRef } from "react";

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const w = window.innerWidth;
  const h = window.innerHeight;
  const rate = 60;
  const arc = 100;
  const size = 7;
  const speed = 20;
  const parts: {
    x: number;
    y: number;
    toX: number;
    toY: number;
    c: string;
    size: number;
  }[] = [];
  const colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
  const mouse = { x: 0, y: 0 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;

    function create() {
      for (let i = 0; i < arc; i++) {
        parts[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 - 1,
          toY: Math.random() * 2 - 1,
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * size,
        };
      }
    }

    function particles() {
      ctx?.clearRect(0, 0, w, h);
      canvas.addEventListener("mousemove", handleMouseMove, false);

      for (let i = 0; i < arc; i++) {
        const li = parts[i];
        const distanceFactor = DistanceBetween(mouse, parts[i]);
        const factor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);

        ctx?.beginPath();
        ctx?.arc(li.x, li.y, li.size * factor, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;

        if (i % 2 === 0) ctx?.stroke();
        else ctx?.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if (li.x > w) li.x = 0;
        if (li.y > h) li.y = 0;
        if (li.x < 0) li.x = w;
        if (li.y < 0) li.y = h;
      }

      if (time < speed) time++;

      setTimeout(particles, 1000 / rate);
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.layerX;
      mouse.y = e.layerY;
    }

    function DistanceBetween(
      p1: { x: number; y: number },
      p2: { x: number; y: number }
    ) {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    let time = 0;
    let count = 0;

    create();
    particles();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default ParticleCanvas;
