import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import iconoCarrito from '../assets/images/iconocarrito.png';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    // Agrega console.log para verificar el valor de totalQuantity
    console.log("Total Quantity:", totalQuantity);

    return (
        <div className="flex items-center">
            <img className="w-10 h-10" src={iconoCarrito} alt="Cart" />
            <span className="text-black ml-1">{`(${totalQuantity})`}</span>
            <Link to="/cart" className="CartWidget ml-2" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>

            </Link>
        </div>
    );
};

export default CartWidget;
