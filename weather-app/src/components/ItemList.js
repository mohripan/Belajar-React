import React, {useState, useEffect} from "react";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['Item 1', 'Item 2', 'Item 3']);
                }, 1000);
            });
            setItems(data);
        };

        fetchData();
    }, []);

    return (
        <ul className="max-w-md mx-auto mt-10">
            {items.map((item, index) => (
                <li key={index} className="p-2 border-b">{item}</li>
            ))}
        </ul>
    );
};

export default ItemList;