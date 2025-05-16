import React from "react";

export default function NavigationBar() {
  return (
    <>
      <style>
        {`
          .frost-hover {
            transition: background 0.2s, color 0.2s;
          }
          .frost-hover:hover {
            background: #fff;
            color: #233658 !important;
          }
        `}
      </style>
      <nav className="fixed top-0 left-0 w-full z-[50] bg-[#233658cc] backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 py-2 shadow-lg transition-colors duration-300" style={{background: "rgba(35,54,88,0.92)"}}>
        {/* Logo & brand */}
        <div className="flex items-center gap-2">
          <span className="inline-block rounded-full bg-gradient-to-tr from-blue-200 to-sky-400 p-1 mr-2">
            <svg width={36} height={36} viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="19" fill="#edf5fb" stroke="#d2e6fc" strokeWidth={2}/><path d="M10 34 Q20 13 30 34" stroke="#4c91ce" strokeWidth={3} fill="none"/><circle cx="20" cy="25" r="3" fill="#4c91ce"/></svg>
          </span>
          <span className="text-xl font-bold text-white tracking-wider drop-shadow-sm">SnowStyle</span>
        </div>
        {/* Menu */}
        <ul className="hidden md:flex gap-7 text-zinc-100 font-bold text-base items-center">
          <li><a href="#" className="frost-hover px-3 py-1.5 rounded-md font-bold transition-all duration-200">Trang chủ</a></li>
          <li><a href="#products" className="frost-hover px-3 py-1.5 rounded-md font-bold transition-all duration-200">Sản phẩm</a></li>
          <li><a href="#sale" className="frost-hover px-3 py-1.5 rounded-md font-bold transition-all duration-200">Sale</a></li>
          <li><a href="#contact" className="frost-hover px-3 py-1.5 rounded-md font-bold transition-all duration-200">Liên hệ</a></li>
        </ul>
        {/* Cart icon & hamburger menu */}
        <div className="flex items-center gap-3">
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
