import { Link } from "react-router-dom"

const Item = ({ id, name, img, category, price }) => {
    return (

        <div className="border-radius: 0.125rem  border-color: rgb(2 6 23 border-style: solid)"    >
<img className="mx-auto" src={img} alt={name} />
<h2>{name}</h2>
<h3 className="text-gray-700 text-base">{price}</h3>
<Link to={`/detail/${id}`}>Ver Descripción</Link>






        </div>
    )
}

export default Item