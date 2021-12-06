import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ asesor, bodega, isHome }) => {
    return (
        <div>
            <Header asesor={asesor} bodega={bodega} isHome={isHome} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
