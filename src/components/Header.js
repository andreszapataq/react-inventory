import { useLocation } from 'react-router-dom'

const Header = ({ title, data }) => {
    let location = useLocation()
    
    return (
        <header className='header'>
            {location.pathname === "/" && <p>Hola</p>}
            <h1>Hola!</h1>
            {/* {data[].nombre} */}
            {/* {console.log(location.pathname)} */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Inventario'
}

export default Header
