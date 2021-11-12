import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import Bodega from "./Bodega"

const Bodegas = ({ bodegas, asesor }) => {
    return (
        <Layout asesor={asesor}>
            {bodegas.map((bodega, index) => (
                <div key={bodega._id}>
                    <Link to={{
                        pathname: `/inventario/${index}`,
                        state: {bodegax: bodega}
                    }}>
                        <Bodega bodega={bodega} />
                    </Link>
                    {console.log(bodega)}
                </div>
            ))}
        </Layout>
    )
}

export default Bodegas
