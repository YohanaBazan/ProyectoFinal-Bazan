import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asynMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    useEffect(() => {

        const asynFunctions = categoryId ? getProductsByCategory : getProducts
        asynFunctions(categoryId)
            .then (res => {
                setProducts(res)
            })
            .catch (error => {
                console.log(error)
            })
    }, [categoryId])

    
    console.log 
    return (
        <div className=" flex flex-wrap justify-center ">
    <h2 className="w-full text-center mb-20">{greetings}</h2>
    {products.length > 0 ? (
        products.map(prod => (
            <div key={prod.id} className="m-10 text-center">
                <ItemList products={[prod]} />
            </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default ItemListContainer