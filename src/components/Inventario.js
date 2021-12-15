import { Link, useLocation } from "react-router-dom"
import Item from "./Item"

const Inventario = () => {
    let location = useLocation()
    const bodega = location.state.bodega

    return (
        <div>
            {bodega.stock.map((item, index) => (
                <Link to={"/lotes"}>
                    <Item key={index} item={item} />
                </Link>
            ))}
        </div>
    )
}

export default Inventario
