import React from "react";

export default function Item({name, quantity, category}) {
    return(
        <div className="flex flex-col">
            <p className="font-mono text-lg">{name}</p>
            <p className="font-mono text-lg">{quantity}</p>
            <p className="font-mono text-lg">{category}</p>
        </div>
    );
}