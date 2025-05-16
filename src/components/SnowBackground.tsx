import React, { useEffect, useRef } from "react";

// SVG cây thông đơn giản - có thể tuỳ chỉnh số lượng và vị trí
const PineTree: React.FC<{ x: number; y: number; size?: number }> = ({ x, y, size = 56 }) => (
  <svg
    style={{ position: "absolute", left: x, top: y, zIndex: 2 }}
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="28,4 46,38 10,38" fill="#337755"/>
    <polygon points="28,16 42,44 14,44" fill="#4ca36d"/>
    <rect x="23" y="44" width="10" height="10" rx="2" fill="#7b5c34"/>
  </svg>
);

const SNOWFLAKE_COUNT = 40;

const HILL_SVG = {
  width: 1920,
  height: 400,
  // Hill path: M0,150 Q480,10 960,180 T1920,160 V400 H0 Z
  // Hàm tính y theo x trên đường hill (giống bezier/path - đây là Q và T phân mảnh)
  getY: (xPx: number) => {
    // x: 0-1920
    if (xPx <= 960) {
      // đoạn đầu: từ 0 đến 960, quadratic bezier M0,150 Q480,10 960,180
      const t = xPx / 960;
      // Bézier bậc 2: B(t) = (1-t)^2*P0 + 2*(1-t)*t*P1 + t^2*P2
      const P0 = 150, P1 = 10, P2 = 180;
      return (1 - t) * (1 - t) * P0 + 2 * (1 - t) * t * P1 + t * t * P2;
    } else {
      // đoạn tiếp: từ 960 đến 1920, Q960,180 1920,160
      const t = (xPx - 960) / 960;
      // Bézier bậc 2: B(t) = (1-t)^2*P0 + 2*(1-t)*t*P1 + t^2*P2
      const P0 = 180, P1 = 180, P2 = 160;
      return (1 - t) * (1 - t) * P0 + 2 * (1 - t) * t * P1 + t * t * P2;
    }
  },
};

const TREE_COUNT = 15;
const TREE_POSITIONS = Array.from({ length: TREE_COUNT }).map((_, idx) => {
  // Phân bố trải đều ngang màn hình, thêm chút ngẫu nhiên
  const x = Math.round(60 + (idx * (1800 / TREE_COUNT)) + ((Math.random() - 0.5) * 70));
  const yH = HILL_SVG.getY(x);
  // Cây đặt chân đúng mặt hill, ngẫu nhiên cao thêm 0-30px để không đều hàng và size lệch nhỏ
  const size = 38 + Math.round(Math.random() * 46);
  // y = mặt hill (tính theo canvas), cộng offset nhỏ để ko bị dính đỉnh
  const y = yH - size + 350; // canvas bottom = 400, display svg ở bottom = 0
  return { x, y, size };
});

const SnowBackground: React.FC = ({ children }) => {
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
    <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: -1, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh", // phủ toàn bộ chiều cao
          background: "linear-gradient(180deg, #232947 0%, #384f78 50%, #b3d1f7 100%)",
          zIndex: 0,
        }}
      />
      {/* Hiệu ứng tuyết rơi phủ toàn màn hình, luôn nổi trên núi/cây */}
      <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh", display: "block", position: "absolute", left: 0, top: 0, pointerEvents: "none", zIndex: 3 }} />
      {/* Đồi tuyết ở nửa dưới dạng SVG */}
      <svg
        style={{ position: "absolute", left: 0, bottom: 0, width: "100vw", height: "46vh", zIndex: 1 }}
        viewBox="0 0 1920 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="snowGrad" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#e8ecf1" />
            <stop offset="70%" stopColor="#b7c6da" />
            <stop offset="100%" stopColor="#a0a8bc" />
          </linearGradient>
        </defs>
        <path
          d="M0,150 Q480,10 960,180 T1920,160 V400 H0 Z"
          fill="url(#snowGrad)"
        />
      </svg>
      {/* Cây thông: có thể random thêm vị trí để tự nhiên hơn */}
      <div style={{ position: "absolute", left: 0, bottom: 0, width: "100vw", height: "46vh", pointerEvents: "none", zIndex: 2 }}>
        {TREE_POSITIONS.map((pos, i) => (
          <PineTree key={i} x={pos.x} y={pos.y} size={pos.size} />
        ))}
      </div>
      {children}
    </div>
  );
};

export default SnowBackground;
