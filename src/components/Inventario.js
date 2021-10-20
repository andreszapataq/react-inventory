import Item from "./Item"

const Inventario = ({ inventario }) => {
    return (
        <>
            {inventario.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </>
    )
}

export default Inventario
