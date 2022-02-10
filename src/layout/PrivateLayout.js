import { Outlet, Navigate } from 'react-router-dom'
import Header from './Header'
import SearchBar from '../components/SearchBar'
import Footer from './Footer'

const PrivateLayout = ({ asesor, isLogged, logout }) => {
    return isLogged ? (
        <div>
            <Header asesor={asesor} />
            <SearchBar placeholder="Buscar..." />
            <Outlet />
            <Footer logout={logout} />
        </div>
    ) : (
        <Navigate to="/login" />
    )
}

export default PrivateLayout
