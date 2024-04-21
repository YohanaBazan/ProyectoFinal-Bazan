import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="flex flex-col items-center text-center m-20 p-20 border border-gray-300 rounded-lg shadow-md">
                <h1 className="text-xl">No hay items en el carrito</h1>
                <Link to="/" className="mt-4 text-blue-500 hover:underline">Products</Link>
            </div>
        );
    }

    const calculateProductTotal = (product) => {
        return product.price * product.quantity;
    };

    return (
        <div className="flex flex-col items-center text-center m-20 p-20 border border-gray-300 rounded-lg shadow-md">
            {cart.map((item) => (
                <div key={item.id} className="mb-6">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Total por producto: ${calculateProductTotal(item)}</p>
                </div>
            ))}
            <h3 className="mt-6 mb-4 text-xl font-semibold">Total: ${totalPrice}</h3>
            <p>Cantidad total de ítems: {totalQuantity}</p>
            <button onClick={() => clearCart()} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Limpiar carrito</button>
            <Link to="/checkOut" className="mt-4 text-blue-500 hover:underline">CheckOut</Link>
        </div>
    );
};

export default Cart;
