// import { Link } from 'react-router-dom'
import Bodega from "./Bodega"

const Bodegas = ({ bodegas }) => {
    return (
        <>
            {bodegas.map((bodega) => (
                // <Link to={``}>
                <Bodega key={bodega._id} bodega={bodega} />
                // </Link>
            ))}
        </>
    )
}

export default Bodegas
