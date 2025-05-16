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
        {/* Tiếp tục các thành phần khác */}
      </div>
    </SnowBackground>
  );
}

export default App;
