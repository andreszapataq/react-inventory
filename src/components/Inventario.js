import { Link, useLocation } from "react-router-dom"
import Item from "./Item"

const Inventario = () => {
    let location = useLocation()
    const bodega = location.state.bodega
    const stock = bodega.stock
    console.log(stock)

    /* const toFindDuplicates = stock => stock.filter((item, index) => stock.indexOf(item) !== index)
    const duplicateElements = toFindDuplicates(stock);
    console.log(duplicateElements); */

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
