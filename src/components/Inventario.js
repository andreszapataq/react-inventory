import Item from "./Item"

const Inventario = ({ inventario }) => {
    return (
        <>
            {inventario.map((item) => (
                <Item key={item.codigo} item={item} />
            ))}
        </>
    )
}

export default Inventario
