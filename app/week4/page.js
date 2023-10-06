import React from 'react';
import NewItem from './new-item';

const Page = () => {
  return (
    <main>
    <h1 className='text-4xl font-mono mb-6 font-bold text-center mt-14 text-gray-300'>Item Form</h1>
      <NewItem />
    </main>
  );
}

export default Page;
