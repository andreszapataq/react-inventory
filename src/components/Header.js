import { useLocation, useParams } from 'react-router-dom'

const Header = ({ asesor, data }) => {
    let location = useLocation()
    const { id } = useParams()
    
    return (
        <header className='header'>
            {location.pathname === "/" && <h1>{`Hola ${asesor}`}</h1>}
            {location.pathname === `/inventario/${id}` && <h1>{data[id].nombre}</h1>}
            {console.log(id)}
            {/* {data[].nombre} */}
            {/* {console.log(location.pathname)} */}
            {/* {console.log(location.pathname.split("/").pop())} */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Inventario'
}

export default Header
