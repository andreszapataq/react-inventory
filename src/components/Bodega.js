import { useParams } from 'react-router-dom'

const Bodega = ({ bodega }) => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams()
    
    return (
        <div>
            <h2>{bodega.nombre}</h2>
        </div>
    )
}

export default Bodega
