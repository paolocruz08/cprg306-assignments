"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  function handleItemSelect(item) {
    const cleanName = item.name
      .split(",")[0]
      .replace(/\p{Emoji}/gu, "")
      .trim();
    setSelectedItemName(cleanName);
  }

  return (
    <main>
      <h1 className="text-2xl font-bold text-center m-4">Shopping List and Meal Ideas</h1>
      <div className="flex justify-center gap-5 items-start">
        <div className="max-w-xl w-96">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="justify-end w-96">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}