import { Link, useLocation } from "react-router-dom"
import Item from "./Item"

const Inventario = () => {
    let location = useLocation()
    const bodega = location.state.bodega
    
    const productos = bodega.stock.map(value => value.nombre)
    console.log(productos)

    const unique = Array.from(new Set(productos))

    console.log(unique)

    return (
        <div>
            {bodega.stock.map((item, index) => (
                <div key={index}>
                    <Link to={`/lotes/${index}`} state={{item}} >
                        <Item key={index} item={item} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Inventario
