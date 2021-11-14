import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import Bodega from "./Bodega"

const Bodegas = ({ bodegas, asesor }) => {
    return (
        <Layout asesor={asesor} isHome={true}>
            {bodegas.map((bodega, index) => (
                <div key={bodega._id}>
                    <Link to={{
                        pathname: `/inventario/${index}`,
                        state: { bodega }
                    }}>
                        {console.log(bodega)}
                        <Bodega bodega={bodega} />
                    </Link>
                </div>
            ))}
        </Layout>
    )
}

export default Bodegas
