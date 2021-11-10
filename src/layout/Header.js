import { useLocation, useParams } from 'react-router-dom'

const Header = ({ asesor, bodega }) => {
    let location = useLocation()
    const { id } = useParams()
    
    return (
        <header className='header'>
            {location.pathname === "/" &&
                <div>
                    <p>Hola</p>
                    <h1>{asesor}</h1>
                </div>
            }
            {location.pathname === `/inventario/${id}` &&
                <h1>{bodega[id].nombre}</h1>
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Inventario'
}

export default Header
