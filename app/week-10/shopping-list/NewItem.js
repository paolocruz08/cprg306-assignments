"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const initialState = { name: "", quantity: 1, category: "produce" };

  const [item, setItem] = useState({
    name: "",
    quantity: 1,
    category: "produce",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = { ...item, id: Math.random().toString(36).substring(2, 9) };

    onAddItem(newItem);

    setItem(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mt-5"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={item.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none text-gray-950 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter item name"
        />
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label htmlFor="quantity" className="block text-gray-700 font-semibold mb-2">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="99"
            value={item.quantity}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={item.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-black font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Item
      </button>
    </form>
  );
}