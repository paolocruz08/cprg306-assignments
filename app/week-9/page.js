"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    await gitHubSignIn();
  }

  async function handleSignOut() {
    await firebaseSignOut();
  }

  return (
    <main>
      <h1 className="text-2xl font-bold text-center m-4">Shopping List App</h1>

      {user ? (
        <div className="text-center">
          <p>Welcome, {user.displayName} ({user.email})</p>
          <br />
          <Link href="/week-9/shopping-list" className="hover:underline hover:text-blue-400">Go to Shopping List</Link>
          <br />
          <br />
          <button onClick={handleSignOut} className="border-2 border-gray-800 px-4 py-2 font-bold hover:bg-red-800 hover:text-white">Sign Out</button>
        </div>
      ) : (
        <div className="text-center">
          <button onClick={handleSignIn} className="border-2 border-gray-800 px-4 py-2 font-bold hover:bg-blue-800 hover:text-white">Sign In with GitHub</button>
        </div>
      )}
    </main>
  );
}