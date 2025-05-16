import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnowBackground from "@/components/SnowBackground";
import NavigationBar from "@/components/NavigationBar";
import BannerHero from "@/components/BannerHero";
import ProductListPage from "@/components/ProductListPage";
import "@/sparkle.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SnowBackground>
              <NavigationBar />
              <div style={{ minHeight: "100vh", position: "relative" }}>
                <h1 className="animate-pulse text-4xl font-bold text-center mt-20 text-zinc-100 drop-shadow-lg relative select-none">
                  Snow Fashion Store
                </h1>
                <BannerHero />
                {/* Danh sách sản phẩm nổi bật */}
                <section id="products" className="max-w-5xl mx-auto mt-10 px-4">
                  <h3 className="text-2xl font-bold text-center mb-6 text-sky-100 drop-shadow-lg ">
                    Sản phẩm nổi bật
                  </h3>
                  <div className="rounded-3xl shadow-2xl border border-white/25 relative overflow-hidden flex flex-col items-center justify-between w-full min-h-[225px] py-7 px-5 md:px-16 mb-8 banner-hero-products">
                    <div className="relative w-full z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                      {/* Demo sản phẩm, bạn có thể thay bằng map từ data thực tế */}
                      {(
                        [
                          {
                            name: "Áo khoác lông vũ",
                            price: "1.200.000₫",
                            img: "https://source.unsplash.com/400x400/?jacket,winter",
                          },
                          {
                            name: "Áo len cổ lọ",
                            price: "650.000₫",
                            img: "https://source.unsplash.com/400x400/?sweater,winter",
                          },
                          {
                            name: "Quần jeans dày",
                            price: "800.000₫",
                            img: "https://source.unsplash.com/400x400/?jeans,winter",
                          },
                          {
                            name: "Mũ len thời trang",
                            price: "250.000₫",
                            img: "https://source.unsplash.com/400x400/?beanie,hat",
                          },
                          {
                            name: "Găng tay giữ nhiệt",
                            price: "180.000₫",
                            img: "https://source.unsplash.com/400x400/?gloves,winter",
                          },
                          {
                            name: "Khăn choàng cổ",
                            price: "320.000₫",
                            img: "https://source.unsplash.com/400x400/?scarf,winter",
                          },
                        ] as const
                      ).map((sp, i) => (
                        <div
                          key={i}
                          className="bg-white/80 dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-4 flex flex-col items-center transition hover:scale-105 hover:shadow-2xl cursor-pointer"
                        >
                          <img
                            src={sp.img}
                            alt={sp.name}
                            className="w-32 h-32 object-cover rounded-xl mb-3 shadow"
                            loading="lazy"
                          />
                          <div className="font-semibold text-lg text-slate-800 dark:text-slate-100 mb-1 text-center">
                            {sp.name}
                          </div>
                          <div className="text-sky-600 dark:text-sky-300 font-bold text-base mb-2">
                            {sp.price}
                          </div>
                          <button className="mt-2 inline-block w-fit bg-white/85 text-[#233658] text-lg font-bold tracking-wide px-7 py-2 rounded-lg shadow hover:bg-[#fead62] hover:text-white/95 hover:scale-105 transition-all duration-200 border border-[#ffe5c8]">
                            Mua ngay
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 pointer-events-none z-0 banner-anim-gradient" />
                  </div>
                </section>
                <style>{`
  .banner-hero-products {
    background: linear-gradient(115deg,#233658 0%,#32476c 60%,#a6c6fb 96%);
    box-shadow: 0 6px 32px 8px #1d242e33, 0 2px 16px #aacbe799;
    position: relative;
  }
  .banner-hero-products:hover .banner-anim-gradient,
  .banner-hero-products:focus-visible .banner-anim-gradient {
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
  .banner-hero-products:hover .banner-anim-gradient,
  .banner-hero-products:focus-visible .banner-anim-gradient {
    opacity:1; filter: blur(13px) saturate(1.4);
  }
  @keyframes bannerfire {
    0%{ background-position: 70% 0; filter:blur(7px) saturate(1.2); }
    48%{ background-position: 7% 100%; opacity: 1; filter:blur(16px) saturate(1.7); }
    100%{ background-position: 100% 0; filter:blur(10px) saturate(2); }
  }
`}</style>
                {/* Chân trang (Footer) chuyên nghiệp */}
                <footer className="w-full mt-16 pt-10 pb-7 bg-gradient-to-t from-[#233658] via-[#2e4066] to-[#3e5a8a] text-white shadow-inner border-t border-white/10">
                  <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8 px-4">
                    {/* Cột 1: Logo & giới thiệu */}
                    <div className="flex-1 min-w-[200px] mb-6 md:mb-0">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block rounded-full bg-gradient-to-tr from-blue-200 to-sky-400 p-1 mr-2">
                          <svg
                            width={36}
                            height={36}
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <circle
                              cx="20"
                              cy="20"
                              r="19"
                              fill="#edf5fb"
                              stroke="#d2e6fc"
                              strokeWidth={2}
                            />
                            <path
                              d="M10 34 Q20 13 30 34"
                              stroke="#4c91ce"
                              strokeWidth={3}
                              fill="none"
                            />
                            <circle cx="20" cy="25" r="3" fill="#4c91ce" />
                          </svg>
                        </span>
                        <span className="text-xl font-bold tracking-wider drop-shadow-sm">
                          Snow Fashion Store
                        </span>
                      </div>
                      <p className="text-sky-100/90 text-sm max-w-xs leading-relaxed">
                        Đem đến cho bạn trải nghiệm mua sắm mùa đông đẳng cấp với các
                        sản phẩm thời trang ấm áp, hiện đại và phong cách. Cảm hứng từ
                        tuyết trắng và sắc xanh lạnh, chúng tôi luôn cập nhật xu hướng
                        mới nhất.
                      </p>
                    </div>
                    {/* Cột 2: Liên kết nhanh */}
                    <div className="flex-1 min-w-[180px] mb-6 md:mb-0">
                      <h4 className="font-bold text-lg mb-3 text-sky-200">
                        Liên kết nhanh
                      </h4>
                      <ul className="space-y-2 text-sky-100/90">
                        <li>
                          <a
                            href="/"
                            className="hover:text-sky-300 transition"
                          >
                            Trang chủ
                          </a>
                        </li>
                        <li>
                          <a
                            href="/products"
                            className="hover:text-sky-300 transition"
                          >
                            Sản phẩm
                          </a>
                        </li>
                        <li>
                          <a
                            href="#sale"
                            className="hover:text-sky-300 transition"
                          >
                            Khuyến mãi
                          </a>
                        </li>
                        <li>
                          <a
                            href="#contact"
                            className="hover:text-sky-300 transition"
                          >
                            Liên hệ
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Cột 3: Đăng ký nhận tin */}
                    <div className="flex-1 min-w-[220px]">
                      <h4 className="font-bold text-lg mb-3 text-sky-200">
                        Nhận ưu đãi & tin mới
                      </h4>
                      <form className="flex flex-col gap-2">
                        <input
                          type="email"
                          required
                          placeholder="Nhập email của bạn"
                          className="rounded-lg px-3 py-2 bg-white/90 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        <button
                          type="submit"
                          className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-5 py-2 rounded-lg shadow transition"
                        >
                          Đăng ký
                        </button>
                      </form>
                      <div className="flex gap-3 mt-4">
                        <a
                          href="#"
                          aria-label="Facebook"
                          className="hover:text-sky-300"
                        >
                          <svg
                            width="22"
                            height="22"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          aria-label="Instagram"
                          className="hover:text-sky-300"
                        >
                          <svg
                            width="22"
                            height="22"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.282.292 2.394 1.272 3.374.98.98 2.092 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.394-.292 3.374-1.272.98-.98 1.213-2.092 1.272-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.282-.292-2.394-1.272-3.374-.98-.98-2.092-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          aria-label="Twitter"
                          className="hover:text-sky-300"
                        >
                          <svg
                            width="22"
                            height="22"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-sky-100/70">
                    © {new Date().getFullYear()} Snow Fashion Store. Thiết kế bởi đội
                    ngũ cảm hứng từ mùa đông & tuyết trắng.
                  </div>
                </footer>
              </div>
            </SnowBackground>
          }
        />
        <Route path="/products" element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
