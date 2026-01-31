export default function GroceryItem({name, quantity, category}) {
    return (
        <li className="border-4 p-3 m-2 even:bg-gray-800 even:text-white even:border-red-900 odd:bg-gray-400 odd:text-black odd:border-indigo-700">
            <div>{name}</div>
            <div>Quantity: {quantity}</div>
            <div>Category: {category}</div>
        </li>
    )
}