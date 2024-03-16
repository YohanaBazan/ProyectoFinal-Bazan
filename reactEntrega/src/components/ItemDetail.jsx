import ItemCount from "./ItemCount"
import React from 'react';


const ItemDetail = ({name, img, category, price, description, stock}) => {

console.log("Imagen:", img);

    return (
    <article className= 'bg-fuchsia-200 flex flex-col justify-center items-center '>
        <h2>{name}</h2>
        {img && <img src={img} alt="" />}


        <p>Categoria: {category}</p>
        <p>{description}</p>
        <h3>{price}</h3>
        <ItemCount initial={1} stock={stock} onAdd={() => console.log('Cantidad agregada')} />
    </article>
)
}

export default ItemDetail