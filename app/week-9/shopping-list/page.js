"use client";

import { useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();
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

  if (!user) {
    return <p className="text-center m-4">You must be logged in to view this page.</p>;
  }

  return (
    <main>
      <h1 className="text-2xl font-bold text-center m-4">Shopping List</h1>
      <div className="flex justify-center items-start">
        <div className="w-96">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-96">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}