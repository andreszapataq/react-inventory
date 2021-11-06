import { useLocation } from 'react-router-dom'

const Header = ({ title }) => {
    let location = useLocation()
    
    return (
        <header className='header'>
            {location.pathname === "/" && <p>Hola</p>}
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Inventario'
}

export default Header
