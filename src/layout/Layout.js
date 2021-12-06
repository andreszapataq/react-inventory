import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ asesor }) => {
    return (
        <div>
            <Header asesor={asesor} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
