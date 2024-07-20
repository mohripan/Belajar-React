import React from "react";

const Product = ({product, addToCart}) => {
    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
            </button>
        </div>
    );
};

export default Product;