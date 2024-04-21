import { Link } from "react-router-dom";
import React from 'react';

const Item = ({ id, name, img, category, price }) => {
    return (
        <div className="border rounded border-gray-300 shadow-md p-4">
            <img className="w-96 h-96" src={img} alt="images" />
            <h2>{name}</h2>
            <p>Categoria: {category}</p>
            <h3 className="text-gray-700 text-base font-serif">{price}</h3>
            <button className="bg-purple-400  hover:bg-pink-200 text-white font-bold py-2 px-4 rounded">
                <Link to={`/detail/${id}`} className="text-white hover:text-gray-800">Ver Descripción</Link>
            </button>
        </div>
    )
}

export default Item;
