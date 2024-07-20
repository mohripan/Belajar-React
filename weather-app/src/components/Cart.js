import React from "react";

const Cart = ({cartItems, removeFromCart}) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index} className="p-2 border-b flex justify-between">
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                        <button onClick={() => removeFromCart(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <h3 className="text-xl font-bold mt-4">Total: ${totalPrice}</h3>
        </div>
    );
};

export default Cart;