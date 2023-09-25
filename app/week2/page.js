import React from 'react';
import Link from 'next/link';

export default function week2() {
    return (
      <main className="flex ml-96 mt-20 space-x-4">
        <h1 className="text-4xl font-mono mb-4">My Shopping List</h1>
        <div className="flex flex-col">
          <p className="font-mono text-lg ml-96">Name: Tamara Mahmoud</p>
          <p className="font-mono text-lg ml-96">Course Section: CPRG 306 A</p>
          <Link className="text-purple-400 font-mono text-lg hover:underline ml-96" href="https://github.com/TamaraMah/cprg306-assignments">https://github.com/TamaraMah/cprg306-assignments</Link>
        </div>
      </main>
    )
  }
  