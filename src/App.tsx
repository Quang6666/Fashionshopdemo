import React from "react";
import SnowBackground from "@/components/SnowBackground";
import NavigationBar from "@/components/NavigationBar";
import BannerHero from "@/components/BannerHero";
import "@/sparkle.css";

function App() {
  return (
    <SnowBackground>
      <NavigationBar />
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <h1 className="animate-pulse text-4xl font-bold text-center mt-20 text-zinc-100 drop-shadow-lg relative select-none">
          Snow Fashion Store
        </h1>
        <BannerHero />
        {/* Danh sách sản phẩm nổi bật */}
        <section id="products" className="max-w-5xl mx-auto mt-10 px-4">
          <h3 className="text-2xl font-bold text-center mb-6 text-sky-900 dark:text-sky-100 drop-shadow">
            Sản phẩm nổi bật
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
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
                <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-5 py-1.5 rounded-lg shadow transition">
                  Mua ngay
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* Chân trang (Footer) */}
        <footer className="w-full mt-16 py-7 bg-[#233658ee] text-white text-center text-sm shadow-inner border-t border-white/10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 px-4">
            <div>
              © {new Date().getFullYear()} Snow Fashion Store. All rights reserved.
            </div>
            <div className="flex gap-4 items-center justify-center">
              <a href="#" className="hover:underline">
                Trang chủ
              </a>
              <a href="#products" className="hover:underline">
                Sản phẩm
              </a>
              <a href="#sale" className="hover:underline">
                Sale
              </a>
              <a href="#contact" className="hover:underline">
                Liên hệ
              </a>
            </div>
          </div>
        </footer>
      </div>
    </SnowBackground>
  );
}

export default App;
