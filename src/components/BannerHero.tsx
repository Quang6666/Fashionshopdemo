import React from "react";

export default function BannerHero() {
  return (
    <section className="w-full flex items-center justify-center mt-6 px-2">
      <div
        className="banner-hero rounded-3xl shadow-2xl border border-white/25 relative overflow-hidden flex flex-col md:flex-row items-center justify-between w-full max-w-5xl min-h-[225px] md:min-h-[300px] py-7 px-5 md:px-16 transition-all duration-500 cursor-pointer"
        // no custom hover here, CSS will handle
      >
        <div className="flex-1 flex flex-col gap-3 z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-xl mb-2 tracking-tight" style={{textShadow: "0 2px 16px #203173cc,0 4px 24px #fff8"}}>
            Thời Trang Đỉnh Cao – Ấm Áp Giữa Mùa Tuyết Trắng
          </h2>
          <p className="text-lg md:text-xl text-sky-100/95 font-medium max-w-md pb-3" style={{textShadow: "0 1px 10px #203173c4"}}>
            Cập nhật xu hướng mùa đông & bộ sưu tập độc quyền, giúp bạn luôn nổi bật dù băng giá.
          </p>
          <button className="mt-2 inline-block w-fit bg-white/85 text-[#233658] text-lg font-bold tracking-wide px-7 py-2 rounded-lg shadow hover:bg-[#fead62] hover:text-white/95 hover:scale-105 transition-all duration-200 border border-[#ffe5c8]">
            Mua sắm ngay
          </button>
        </div>
        {/* gradient động phía sau */}
        <div className="absolute inset-0 pointer-events-none z-0 banner-anim-gradient" />
      </div>
      <style>{`
      .banner-hero {
        background: linear-gradient(115deg,#233658 0%,#32476c 60%,#a6c6fb 96%);
        box-shadow: 0 6px 32px 8px #1d242e33, 0 2px 16px #aacbe799;
        position: relative;
      }
      .banner-hero:hover .banner-anim-gradient,
      .banner-hero:focus-visible .banner-anim-gradient {
        animation-play-state: running;
      }
      .banner-anim-gradient {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(125deg,transparent 10%,#fead62bb 28%,#ee4d2d99 45%,#fff9 54%,#59d2ff99 80%,transparent 100%);
        opacity:0.69;
        background-size: 200% 100%;
        background-position: 70% 0;
        border-radius:inherit;
        filter: blur(6px) saturate(1.3);
        animation: bannerfire 2.5s cubic-bezier(.6,0,.6,1.05) infinite alternate paused;
        transition: opacity .28s;
        pointer-events: none;
        z-index:0;
      }
      .banner-hero:hover .banner-anim-gradient,
      .banner-hero:focus-visible .banner-anim-gradient {
        opacity:1; filter: blur(13px) saturate(1.4);
      }
      @keyframes bannerfire {
        0%{ background-position: 70% 0; filter:blur(7px) saturate(1.2); }
        48%{ background-position: 7% 100%; opacity: 1; filter:blur(16px) saturate(1.7); }
        100%{ background-position: 100% 0; filter:blur(10px) saturate(2); }
      }
      `}</style>
    </section>
  );
}
