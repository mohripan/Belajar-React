import React, {useState} from "react";
import Product from "./Product";
import Cart from "./Cart";

const products = [
    { name: 'Product 1', price: 10 },
  { name: 'Product 2', price: 20 },
  { name: 'Product 3', price: 30 },
];

const Shop = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (products) => {
        setCartItems([...cartItems, products]);
    };

    const removeFromCart = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Shop</h1>
            <div className="grid grid-cols-1 gap-4">
                {products.map((product, index) => (
                    <Product key={index} product={product} addToCart={addToCart} />
                ))}
            </div>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    );
};

export default Shop;