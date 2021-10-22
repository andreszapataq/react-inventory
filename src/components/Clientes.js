import Cliente from "./Cliente"

const Clientes = ({ clientes }) => {
    return (
        <>
            {clientes.map((cliente, index) => (
                <Cliente key={index} cliente={cliente} />
            ))}
        </>
    )
}

export default Clientes
