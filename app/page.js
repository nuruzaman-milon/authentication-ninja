import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="text-center">
        <div>
          <p>This is home page</p>
          <Link href={"/about"} className="underline">
            Go to About Page
          </Link>
        </div>
      </section>
    </main>
  );
}
