import Layout from "../layout/Layout"
import Item from "./Item"

const Inventario = ({ bodega, inventario }) => {
    return (
        <Layout bodega={bodega}>
            {inventario.map((item) => (
                <Item key={item.codigo} item={item} />
            ))}
        </Layout>
    )
}

export default Inventario
