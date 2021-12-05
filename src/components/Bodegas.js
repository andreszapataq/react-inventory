import { Link } from 'react-router-dom'
import Bodega from "./Bodega"

const Bodegas = ({ bodegas }) => {
    return (
        <div>
            {bodegas.map((bodega, index) => (
                <div key={bodega._id}>
                    <Link to={{
                        pathname: `/inventario/${index}`,
                        state: { bodega }
                    }}>
                        <Bodega bodega={bodega} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Bodegas
