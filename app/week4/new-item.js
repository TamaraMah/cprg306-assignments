"use client"

import React, { useState } from 'react';

const NewItem = () => {
  const [name, setName] = useState(''); 
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState('produce'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-5 rounded shadow">
      <div className="mb-4">
        <label className="block text-purple-500 text-sm font-bold mb-2">Item Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-purple-500 text-sm font-bold mb-2">Quantity</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Number(e.target.value))} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="1" 
          max="99" 
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-purple-500 text-sm font-bold mb-2">Category</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="meat">Meat</option>
          <option value="bakery">Bakery</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button type="submit" className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Item
      </button>
    </form>
  );
};

export default NewItem;
