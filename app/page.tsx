import Card from "@/components/Card";
import Link from "next/link";
export default function Home() {
  return (
    <div className="pb-16 ">
      <nav className="h-24 bg-neutral-950 flex items-center justify-between mx-auto px-20 shadow-md gap-20">
        <span className="text-3xl font-mono font-bold text-red-400 ">
          🚀 IdeaHub
        </span>
        <span className="space-x-4">
          <Link href='/pro' className="text-xl font-sans font-medium text-red-200 bg-neutral-600 p-2 px-6 rounded-full hover:opacity-80 transition">Pro 🔥</Link>
          <button className="text-xl font-sans font-bold text-neutral-800 bg-red-300 p-2 px-6 rounded-full hover:opacity-80 transition">Sign In</button>
        </span>
      </nav>
      <main className="pt-16 max-w-[1500px] flex flex-wrap items-center justify-center gap-16 mx-auto w-fit">
        <Card path='/book' title='Books Recommender' />
        <Card path='/gift' title='Gifts Recommender' />
        <Card path='/meme' title='Memes Generator' />
        <Card path='/music' title='Music Playlist Recommender' />
        <Card path='/quote' title='Quotes Generator' />
        <Card path='/recipe' title='Recipe Recommender' />
        <Card path='/sign' title='Digital Signer' />
      </main>
    </div>
  )
}
