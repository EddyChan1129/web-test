export default function FilterPanel({
  selectedCategory,
  setSelectedCategory,
  onlyInStock,
  setOnlyInStock,
}) {
  return (
    <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm space-y-5">
      {/* Category Select */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Filter by Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
          <option value="home">Home</option>
        </select>
      </div>

      {/* In-stock Toggle */}
      <div className="flex items-center space-x-3">
        <input
          id="stock"
          type="checkbox"
          checked={onlyInStock}
          onChange={(e) => setOnlyInStock(e.target.checked)}
          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="stock" className="text-sm text-gray-700">
          Only show in-stock
        </label>
      </div>
    </div>
  );
}
