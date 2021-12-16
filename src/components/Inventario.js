import { Link, useLocation } from "react-router-dom"
import Item from "./Item"

const Inventario = () => {
    let location = useLocation()
    const bodega = location.state.bodega
    console.log(location.state)

    return (
        <div>
            {bodega.stock.map((item, index) => (
                <div key={index}>
                    {console.log(item)}
                    <Link to={`/lotes/${index}`} state={{item}}>
                        <Item key={index} item={item} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Inventario
