import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href="/about">Link to the About page</Link>
      <div>Hello world</div>
    </main>
  )
}
