import { useState } from "react"

const ItemCount = ({initial=1, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
const increment = () => {
    if (quantity < stock) {
    setQuantity (quantity+1)
}}
const decrement = () => {
    if (quantity > 1)
{
    setQuantity (quantity-1)
}}
const handleAddToCart = () => {
    if (quantity > 0) {
        onAdd(quantity);
    }
};




    return (
        <div className="controls flex items-center justify-center">
            <h2>{quantity}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <div className="text-center mt-4">
                <button className='button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleAddToCart} disabled={!stock || quantity === 0}>Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount