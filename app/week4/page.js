// page.js

import Link from 'next/link';
import NewItem from './new-item';

const Page = () => {
  return (
    <main className="w-screen h-screen overflow-scroll p-5 bg-gray-100">
      <h1 className='text-4xl font-mono mb-4 font-bold mt-8 ml-96'>Item Form</h1>
      
      {/* Including NewItem component */}
      <NewItem />
    </main>
  );
}

export default Page;
