import { useState } from "react";
import { PRODUCT_DATA } from "./constants/data";
import FilterPanel from "./components/FilterPanel";
import ProductCard from "./components/ProductCard";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [onlyInStock, setOnlyInStock] = useState(false);

  const filtered = PRODUCT_DATA.filter((product) => {
    const matchCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchStock = onlyInStock ? product.inStock : true;
    return matchCategory && matchStock;
  });

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight text-center border-b pb-3">
        Product Filter
      </h1>

      <FilterPanel
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onlyInStock={onlyInStock}
        setOnlyInStock={setOnlyInStock}
      />

      <ProductCard products={filtered} />
    </div>
  );
}
