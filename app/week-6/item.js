export default function Item({ name, quantity, category }) {
  return (
    <li className="border-4 p-3 m-2 even:bg-gray-800 even:text-white even:border-red-900 odd:bg-gray-400 odd:text-black odd:border-indigo-700">
      <div className="flex justify-between items-center">
        <div>
          <p>{name}</p>
          <p className="text-sm text-gray-500 capitalize mt-1">Category: {category}</p>
        </div>
        <div className="text-right">
          <span className="text-md font-medium text-blue-600">
            Qty: {quantity}
          </span>
        </div>
      </div>
    </li>
  );
}