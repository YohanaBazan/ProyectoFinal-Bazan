import { useState } from "react"

const ItemCount = ({ initial = 1, stock,onAdd }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    }
    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <div className="text-center mt-4">
                <button className='button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => onAdd(count)} disabled={count>= stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount