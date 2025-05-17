import React from "react";
import SnowBackground from "@/components/SnowBackground";
import NavigationBar, { LanguageType } from "@/components/NavigationBar";
import ProductList from "@/components/ProductList";

export default function ProductListPage({ language, setLanguage }: { language: LanguageType; setLanguage?: (lang: LanguageType) => void }) {
  return (
    <SnowBackground>
      <NavigationBar language={language} setLanguage={setLanguage || (() => {})} />
      <ProductList language={language} />
    </SnowBackground>
  );
}
