import { Link, useLocation } from "react-router-dom"
import Item from "./Item"

const Inventario = () => {
    let location = useLocation()
    const bodega = location.state.bodega

    return (
        <div>
            {bodega.stock.map((item, index) => (
                <div key={index}>
                    {console.log(item)}
                    <Link to={`/lotes/${index}`}>
                        <Item key={index} item={item} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Inventario
