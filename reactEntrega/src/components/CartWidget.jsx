import iconoCarrito from '../assets/images/iconocarrito.png';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext); 

    return (
        <div className="flex">
            <img className= "w-[10%] "src={iconoCarrito} alt="Cart" />
            <span className="text-black">{`(${totalQuantity})`}</span>
            <Link to={"/cart"} className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            </Link>
        </div>
    );
};

export default CartWidget;
