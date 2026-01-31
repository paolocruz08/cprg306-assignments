import GroceryItemList from "./GroceryItemList"

export default function Page() {
    return (
        <main className="p-4 max-w-md mx-15">
            <h1 className="p-2 text-3xl font-bold mb-4">Shopping List</h1>
            <GroceryItemList />
        </main>
    );
}