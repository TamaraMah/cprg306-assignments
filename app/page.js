import React from "react";
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex flex-col items-center mt-20 space-y-4">

      <h1 className="text-4xl font-mono mb-4">CPRG 306: Web Development 2 - Assignment</h1>

      <div className="flex space-x-4 mb-8">
        <Link href="/" className="text-purple-400 hover:underline font-mono text-xl">Home</Link>
        <Link href="/week2" className="text-purple-400 hover:underline font-mono text-xl">Week 2</Link>
        <Link href="/week3" className="text-purple-400 hover:underline font-mono text-xl">Week 3</Link>
        <Link href="/week4" className="text-purple-400 hover:underline font-mono text-xl">Week 4</Link>
        <Link href="/week5" className="text-purple-400 hover:underline font-mono text-xl">Week 5</Link>
      </div>

      <div className="w-full max-w-screen-md">
        <p className="font-mono text-lg">Name: Tamara Mahmoud</p>
        <p className="font-mono text-lg">Course Section: CPRG 306 A</p>
        <Link className="text-purple-400 font-mono text-lg hover:underline" href="https://github.com/TamaraMah/cprg306-assignments">https://github.com/TamaraMah/cprg306-assignments</Link>
      </div>
    </main>
  )
}
