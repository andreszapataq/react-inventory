import { useLocation } from "react-router-dom"
import Item from "./Item"

const Inventario = () => {
    let location = useLocation()
    const bodega = location.state.bodega

    return (
        <div>
            {bodega.stock.map((item) => (
                <Item key={item.codigo} item={item} />
            ))}
        </div>
    )
}

export default Inventario
