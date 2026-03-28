"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    async function loadItems() {
      const data = await getItems(user.uid);
      setItems(data);
    }
    if (user) {
      loadItems();
    }
  }, [user]);

  if (!user) {
    return <p className="text-center m-4">You must be logged in to view this page.</p>;
  }

  async function handleAddItem(newItem) {
    const id = await addItem(user.uid, {
      name: newItem.name,
      quantity: Number(newItem.quantity),
      category: newItem.category,
    });
    setItems((prev) => [...prev, { ...newItem, id }]);
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