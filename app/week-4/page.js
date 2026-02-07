"use client";

import ItemList from './item-list';

export default function Page() {
  return (
    <main>
      <div className="max-w-md mx-auto">
        <h1 className="p-2 text-4xl font-bold mb-4 text-center">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}