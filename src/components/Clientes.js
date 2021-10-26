// import { Link } from 'react-router-dom'
import Cliente from "./Cliente"

const Clientes = ({ clientes }) => {
    return (
        <>
            {clientes.map((cliente) => (
                // <Link to={``}>
                    <Cliente key={cliente._id} cliente={cliente} />
                // </Link>
            ))}
        </>
    )
}

export default Clientes
