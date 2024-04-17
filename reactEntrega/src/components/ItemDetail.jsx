import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        addItem({ id, name, price }, quantity);
    };


    return (
<div className="bg-fuchsia-200 p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
    <div className="w-full max-w-md">
        <div className="overflow-hidden bg-white shadow-md rounded-lg">
            <img className="w-full" src={img} alt={name} />
            <div className="p-6">
                <h2 className="text-xl font-bold text-center">{name}</h2>
                <h3 className="text-sm text-gray-600 mb-4 text-center">Categoría: {category}</h3>
                <p className="text-gray-800 text-center">{description}</p>
                <h4 className="text-lg font-bold mt-4 text-center">{price}</h4>
                <h2>Stock disponible: {stock} </h2>
            </div>
            <div className="ItemFooter">
                {quantityAdded > 0 ? (
                    <Link to="/cart" className="Button">Terminar compra</Link>
                ) : (
                    <ItemCount stock={stock} onAdd={handleOnAdd} />
                )}
            </div>
        </div>
    </div>
</div>
    );


}



export default ItemDetail;











