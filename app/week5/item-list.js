import React, { useState } from "react";
import itemsJson from './items.json';

const ItemList = () => {
    const [items, setItems] = useState(itemsJson);
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return { sortedItems, setSortBy };
}

export default ItemList;
