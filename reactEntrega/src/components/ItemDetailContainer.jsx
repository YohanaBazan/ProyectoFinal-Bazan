import { useEffect, useState } from "react"
import { getProductsById } from "../../asynMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {productId} = useParams() 
    useEffect( ()=>{
        getProductsById(productId)
            .then(response =>{
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId])

    return (
    <div>
        <ItemDetail {...product}/>
    </div>
)
}

export default ItemDetailContainer