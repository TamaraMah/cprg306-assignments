"use client"
import React, { useState } from 'react';
import ItemList from './item-list'; 
import NewItem from './new-item';
import itemsJson from './items.json';

const Page = () => {
    const [sortBy, setSortBy] = useState('name');
    const [items, setItems] = useState(itemsJson);

    const handleAddItem = newItem => {
        setItems(oldItems => [...oldItems, { ...newItem, id: Date.now().toString() }]);
    };

    return (
        <div>
            <h1 className="text-4xl font-mono mb-4 font-bold mt-8 ml-14">Shopping List</h1>
            
            <button onClick={() => setSortBy('name')} className={sortBy === 'name' ? 'ml-14 mb-4 border border-cyan-800 hover:bg-cyan-900 p-2 rounded bg-cyan-800 text-white': 'ml-14 mb-4 border border-cyan-800 hover:bg-cyan-900 p-2 rounded'}>Sort by Name</button>
            <button onClick={() => setSortBy('category')} className={sortBy === 'category' ? 'ml-4 mb-4 border border-cyan-800 hover:bg-cyan-900 p-2 rounded bg-cyan-800 text-white': 'ml-4 mb-4 border border-cyan-800 hover:bg-cyan-900 p-2 rounded'}>Sort by Category</button>
            
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} sortBy={sortBy}/>
        </div>
    );
}

export default Page;
