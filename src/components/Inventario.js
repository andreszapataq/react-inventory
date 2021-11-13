import Layout from "../layout/Layout"
import Item from "./Item"

const Inventario = (props) => {
    const bodega = props.location.state.bodega
    
    return (
        <Layout bodega={bodega}>
            {bodega.stock.map((item) => (
                <Item key={item.codigo} item={item} />
            ))}
        </Layout>
    )
}

export default Inventario
