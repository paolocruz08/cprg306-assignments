"use client";

import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  return (
    <div>
      <ul>
        {itemsData.map((item) => (
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