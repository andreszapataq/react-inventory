import { Link, useParams } from 'react-router-dom'

const Cliente = ({ cliente }) => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams()
    
    return (
        <Link to={`/inventario/${cliente.nombre}`}>
            <h2>{cliente.nombre}</h2>
        </Link>
    )
}

export default Cliente
