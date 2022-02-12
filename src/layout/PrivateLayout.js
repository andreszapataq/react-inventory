import { Outlet, Navigate } from 'react-router-dom'
import Header from './Header'
import SearchBar from '../components/SearchBar'
import Footer from './Footer'

const PrivateLayout = ({ asesor, data, isLogged, logout }) => {
    console.log(data)
    return isLogged ? (
        <div>
            <Header asesor={asesor} />
            <SearchBar placeholder="Buscar..." data={data} />
            <Outlet />
            <Footer logout={logout} />
        </div>
    ) : (
        <Navigate to="/login" />
    )
}

export default PrivateLayout
