import { Link } from "react-router-dom"
import React from 'react';


const Item = ({ id, name, img, price }) => {
    return (
        <div className="border rounded border-gray-300 shadow-md p-4"    >
            
            <img className="w-96 h-96" src={img} alt="images" />
            <h2>{name}</h2>
            

            <h3 className="text-gray-700 text-base font-serif">{price}</h3>
            <Link to={`/detail/${id}`}>Ver Descripción</Link>


        </div>
    )
}

export default Item