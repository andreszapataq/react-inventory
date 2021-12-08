import { Outlet, Navigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const PrivateLayout = ({ asesor, isLogged, logout }) => {
    return isLogged ? (
        <div>
            <Header asesor={asesor} logout={logout} />
            <Outlet />
            <Footer />
        </div>
    ) : (
        <Navigate to="/login" />
    )
}

export default PrivateLayout
