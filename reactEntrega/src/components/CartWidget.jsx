import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import iconoCarrito from '../assets/images/iconocarrito.png';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext); 

    return (
        <div className="flex">
            <span className="text-black">{`(${totalQuantity})`}</span>
            <Link to={"/cart"} className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
                <img className="CartImg" src={iconoCarrito} alt="iconocarrito" />
            </Link>
        </div>
    );
};

export default CartWidget;
