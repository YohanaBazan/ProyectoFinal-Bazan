import React from 'react';
import iconoCarrito from '../assets/images/iconocarrito.png';

const CartWidget = () => {
    return (
        <>
            <div className='flex  '>
            <span className='text-black'>(0)</span>
                <img className='flex w-[30px] p-0 m-2' src={iconoCarrito} alt="iconocarrito" />
            </div>
        </>
    );
};

export default CartWidget;