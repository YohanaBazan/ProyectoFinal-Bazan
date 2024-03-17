import ItemCount from "./ItemCount";
import React from 'react';

const ItemDetail = ({ name, img, category, price, description, stock }) => {
    console.log("Imagen:", img);

    return (
        <article className='bg-fuchsia-200 p-6 rounded-lg shadow-md flex flex-col justify-center items-center'>
            <div className="w-full max-w-md">
                <div className="overflow-hidden bg-white shadow-md rounded-lg">
                    <img className="w-full" src={img} alt={name} />
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-center">{name}</h2>
                        <h3 className="text-sm text-gray-600 mb-4 text-center">Categoría: {category}</h3>
                        <p className="text-gray-800 text-center">{description}</p>
                        <h4 className="text-lg font-bold mt-4 text-center">{price}</h4>
                        <ItemCount initial={1} stock={stock} onAdd={() => console.log('Cantidad agregada')} />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ItemDetail;