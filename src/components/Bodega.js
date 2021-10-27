import { Link, useParams } from 'react-router-dom'

const Bodega = ({ bodega }) => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams()
    
    return (
        <Link to={`/inventario/${bodega.nombre}`}>
            <h2>{bodega.nombre}</h2>
        </Link>
    )
}

export default Bodega
