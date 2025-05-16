import React, { useEffect, useRef } from "react";

const SNOWFLAKE_COUNT = 40;

const SnowBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let animationFrameId: number;
    const ctx = canvas.getContext("2d");
    let snowflakes = Array.from({ length: SNOWFLAKE_COUNT }, () => ({
      x: Math.random(), // x, y: 0..1 theo % chiều rộng, chiều cao
      y: Math.random(),
      r: 1 + Math.random() * 2.2,
      speed: 0.001 + Math.random() * 0.002,
      drift: (Math.random() - 0.5) * 0.0015,
    }));
    const draw = () => {
      if (!ctx || !canvas) return;
      const w = canvas.width = window.innerWidth;
      const h = canvas.height = window.innerHeight; // phủ toàn bộ
      ctx.clearRect(0,0,w,h);
      snowflakes.forEach(sf => {
        ctx.beginPath();
        ctx.arc(sf.x * w, sf.y * h, sf.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.84)";
        ctx.shadowColor = "#e8f1ff";
        ctx.shadowBlur = 8;
        ctx.fill();
        // update vị trí
        sf.y += sf.speed;
        sf.x += sf.drift;
        if (sf.y > 1) {
          sf.y = 0;
          sf.x = Math.random();
        }
        if (sf.x < 0) sf.x = 1;
        if (sf.x > 1) sf.x = 0;
      });
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", draw);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", draw);
    };
  }, []);
  return (
    <>
      {/* Nền gradient và hiệu ứng tuyết phủ toàn trang, luôn nằm dưới cùng */}
      <div style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(180deg, #232947 0%, #384f78 50%, #b3d1f7 100%)",
        zIndex: 0,
        pointerEvents: "none"
      }} />
      <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh", display: "block", position: "fixed", left: 0, top: 0, pointerEvents: "none", zIndex: 1 }} />
      {/* Nội dung chính luôn nằm trên */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {children}
      </div>
    </>
  );
};

export default SnowBackground;
