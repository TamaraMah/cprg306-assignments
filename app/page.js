import React from "react";
import Link from 'next/link';
import Head from 'next/head';

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center mb-10 ">Web Development Week 2 Assignment</h1>
      <div className="flex justify-center space-x-2">
       <Link href="/" className="text-purple-400 hover:underline">Home</Link>
       <Link href="/week2" className="text-purple-400 hover:underline ">Week 2</Link>
      </div>
    </main>
  )
}
