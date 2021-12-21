import { Link, useLocation } from "react-router-dom"
import Item from "./Item"

const Inventario = () => {
    let location = useLocation()
    const bodega = location.state.bodega
    
    let stocx = bodega.stock
    const productos = bodega.stock.map(value => value.nombre)
    console.log(productos)

    const unique = Array.from(new Set(productos))
    console.log(stocx)

    let parsedItems = []
    for(let itex of stocx) {
        console.log(itex)
        if(parsedItems.includes(itex.nombre)) {
            // itex.cantidad = itex.cantidad + 1
            console.log("NO ESTÁ")
        }
        else {
            parsedItems.push(itex.codigo)
            parsedItems.push(itex.nombre)
            // itex.cantidad = 1
        }
    }

    console.log(unique)
    console.log(stocx)
    console.log(parsedItems)

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
