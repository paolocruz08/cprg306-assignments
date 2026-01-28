import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <section>
        <Link href="/week-2" className="hover:underline">Go to Week 2</Link>
      </section>
    </main>
  );
}