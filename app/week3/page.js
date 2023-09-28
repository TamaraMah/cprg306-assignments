import React from 'react';
import items from './item-list'; 
import Item from './item';

const Page = () => {
    return (
        <div>
            <h1 className = "text-4xl font-mono mb-4 font-bold mt-8 ml-14">Shopping List</h1>
            <div className="grid grid-cols-2 p-6 m-6 mt-0">
            {items.map((item, index) => (
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
