import { Outlet, Navigate } from 'react-router-dom'
import Header from './Header'
// import SearchBar from '../components/SearchBar'
import Footer from './Footer'

const PrivateLayout = ({ asesor, data, isLogged, logout }) => {
    console.log(data) // ELIMINAR
    return isLogged ? (
        <div className='private-layout'>
            <Header asesor={asesor} />
            {/* <SearchBar placeholder="Buscar..." data={data} /> */}
            <Outlet />
            <Footer logout={logout} />
        </div>
    ) : (
        <Navigate to="/login" />
    )
}

export default PrivateLayout
