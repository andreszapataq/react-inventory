import { Outlet, Navigate } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

const PrivateLayout = ({ asesor, data, isLogged, logout }) => {
    return isLogged ? (
        <div className='private-layout'>
            <Header asesor={asesor} />
            <Outlet />
            <Footer logout={logout} />
        </div>
    ) : (
        <Navigate to="/login" />
    )
}

export default PrivateLayout
