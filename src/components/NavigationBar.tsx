import React, { useState, useEffect } from "react";

export default function NavigationBar() {
  // State theme: "snow" | "fire"
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "snow");

  useEffect(() => {
    document.body.classList.remove("theme-snow", "theme-fire");
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <style>
        {`
          .frost-hover {
            transition: background 0.2s, color 0.2s;
          }
          .frost-hover:hover {
            background: var(--main-btn);
            color: var(--main-bg) !important;
          }
          /* Theme fire */
          .theme-fire {
            --main-bg: #2d1a0b;
            --main-grad1: #ff7e5f;
            --main-grad2: #feb47b;
            --main-grad3: #ff512f;
            --main-grad4: #dd2476;
            --main-text: #fff3e0;
            --main-accent: #ff9800;
            --main-btn: #eaf6ff;
            --main-btn-hover: #ff512f;
          }
          .theme-snow {
            --main-bg: #233658;
            --main-grad1: #233658;
            --main-grad2: #32476c;
            --main-grad3: #a6c6fb;
            --main-grad4: #59d2ff;
            --main-text: #eaf6ff;
            --main-accent: #59d2ff;
            --main-btn: #fead62;
            --main-btn-hover: #233658;
          }
          body.theme-fire {
            background: linear-gradient(120deg, var(--main-grad1), var(--main-grad2), var(--main-grad3), var(--main-grad4));
          }
          body.theme-snow {
            background: linear-gradient(120deg, var(--main-grad1), var(--main-grad2), var(--main-grad3), var(--main-grad4));
          }
        `}
      </style>
      <nav className="fixed top-0 left-0 w-full z-[50] bg-[#233658cc] backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 py-2 shadow-lg transition-colors duration-300" style={{background: theme === "fire" ? "rgba(255,126,95,0.92)" : "rgba(35,54,88,0.92)"}}>
        {/* Logo & brand */}
        <div className="flex items-center gap-2">
          <span className="inline-block rounded-full bg-gradient-to-tr from-blue-200 to-sky-400 p-1 mr-2">
            <svg width={36} height={36} viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="19" fill="#edf5fb" stroke="#d2e6fc" strokeWidth={2}/><path d="M10 34 Q20 13 30 34" stroke="#4c91ce" strokeWidth={3} fill="none"/><circle cx="20" cy="25" r="3" fill="#4c91ce"/></svg>
          </span>
          <span className="text-xl font-bold text-white tracking-wider drop-shadow-sm">SnowStyle</span>
        </div>
        {/* Menu */}
        <ul className="hidden md:flex gap-7 text-zinc-100 font-bold text-base items-center">
          <li><a href="/products" className="frost-hover px-3 py-1.5 rounded-md font-bold transition-all duration-200">Sản phẩm</a></li>
          <li><a href="#sale" className="frost-hover px-3 py-1.5 rounded-md font-bold transition-all duration-200">Sale</a></li>
          <li><a href="#contact" className="frost-hover px-3 py-1.5 rounded-md font-bold transition-all duration-200">Liên hệ</a></li>
        </ul>
        {/* Theme switch button + Cart icon & hamburger menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "snow" ? "fire" : "snow")}
            className={`px-4 py-2 rounded-lg font-bold shadow border border-[#ffe5c8] transition-all duration-200 mr-2 ${theme === "fire" ? "bg-gradient-to-tr from-[#ff7e5f] to-[#feb47b] text-white hover:from-[#feb47b] hover:to-[#ff512f]" : "bg-white/85 text-[#233658] hover:bg-[#fead62] hover:text-white/95"}`}
            style={{ minWidth: 120 }}
            aria-label="Đổi màu giao diện"
          >
            {theme === "fire" ? "Chế độ Lửa" : "Chế độ Tuyết"}
          </button>
          <button className="relative group hover:scale-110 transition-transform">
            <svg width={25} height={25} fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M4 4h2l2.5 13h10l2.5-9H7"/></svg>
            {/* Badge số lượng (demo) */}
            <span className="absolute -top-1.5 -right-1 bg-sky-400 text-xs px-1.5 py-0.5 rounded-full text-white font-bold shadow-sm border border-white/90">2</span>
          </button>
          {/* Hamburger for mobile */}
          <button className="inline-block md:hidden p-2" aria-label="Open menu">
            <svg width={28} height={28} fill="none" stroke="#e8f0fa" strokeWidth={2.2}><line x1={4} y1={8} x2={24} y2={8} /><line x1={4} y1={15} x2={24} y2={15} /><line x1={4} y1={22} x2={24} y2={22} /></svg>
          </button>
        </div>
      </nav>
    </>
  );
}
