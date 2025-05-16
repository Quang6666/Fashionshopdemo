import React from "react";
import SnowBackground from "@/components/SnowBackground";
import NavigationBar from "@/components/NavigationBar";
import ProductList from "@/components/ProductList";

export default function ProductListPage() {
  return (
    <SnowBackground>
      <NavigationBar />
      <ProductList />
    </SnowBackground>
  );
}
