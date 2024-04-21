import { useState } from "react";

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            onAdd(quantity);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="item-container border-2 border-lightblue-500 rounded-lg p-4 mb-4 shadow-md">
                <h2 className="mb-2 text-center">{quantity}</h2>
                <div className="flex justify-center"> 
                    <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" onClick={decrement}>-</button>
                    <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded ml-2" onClick={increment}>+</button>
                </div>
                <div className="mt-4">
                    <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded block" onClick={handleAddToCart} disabled={!stock || quantity === 0}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
