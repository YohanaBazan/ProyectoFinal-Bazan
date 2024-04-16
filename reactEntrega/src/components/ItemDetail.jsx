import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";



const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        addItem({ id, name, price }, quantity);
    };


    return (


        <div >
            <h1>{name}</h1>
            <img src={img} style={{ width: 200 }} alt="" />
            <p>Categoria: {category}</p>
            <p>{description}</p>
            <h1> ${price}</h1>
            <h2>Stock disponible: {stock} </h2>
            <div className="ItemFooter">
                {quantityAdded > 0 ? (
                    <Link to="./Cart.jsx" className="Button">Terminar compra</Link>
                ) : (
                    <ItemCount stock={stock} onAdd={handleOnAdd} />
                )}
            </div>
        </div>
    );
};







export default ItemDetail;











