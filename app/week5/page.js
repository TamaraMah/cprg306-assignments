"use client"
import React, { useState } from 'react';
import ItemList from './item-list'; 
import Item from './item';

const Page = () => {
    const [sortBy, setSortBy] = useState('name');

    return (
        <div>
            <h1 className="text-4xl font-mono mb-4 font-bold mt-8 ml-14">Shopping List</h1>
            
            <button onClick={() => setSortBy('name')} className={sortBy === 'name' ? 'border-purple-200': 'ml-14 mb-4 border border-cyan-800 hover:bg-cyan-900 p-2 rounded'}>Sort by Name</button>
            <button onClick={() => setSortBy('category')} className="ml-4 mb-4 border border-cyan-800 hover:bg-cyan-900 p-2 rounded">Sort by Category</button>
            
            <div className="grid grid-cols-2 p-6 m-6 mt-0">
            {sortedItems.map((item, index) => (
                <div key={index} style={{border: '1px solid purple', padding: '10px', margin: '10px'}}>
                    <Item 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                    />
                </div>
            ))}
            </div>
        </div>
    );
}

export default Page;
