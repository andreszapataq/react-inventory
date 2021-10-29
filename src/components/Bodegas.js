import { Link } from 'react-router-dom'
import Bodega from "./Bodega"

const Bodegas = ({ bodegas }) => {
    return (
        <>
            {bodegas.map((bodega, index) => (
                <div key={bodega._id}>
                    <Link to={`/inventario/${index}`}>
                        <Bodega bodega={bodega} />
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Bodegas
