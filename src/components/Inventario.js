import Item from "./Item"

const Inventario = ({ bodega }) => {
    return (
        <div>
            {bodega.stock.map((item) => (
                <Item key={item.codigo} item={item} />
            ))}
        </div>
    )
}

export default Inventario
