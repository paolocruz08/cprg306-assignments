"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  });

  return (
    <div className="max-w-md mx-auto">
      <button
        onClick={() => setSortBy("name")}
        className={`p-2 m-1 border rounded ${sortBy === "name" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
      >
        Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        className={`p-2 m-1 border rounded ${sortBy === "category" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
      >
        Category
      </button>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}