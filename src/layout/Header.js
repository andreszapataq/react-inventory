import { useLocation } from "react-router-dom"

const Header = ({ asesor }) => {
    let location = useLocation()
    const bodega = location.state?.bodega.nombre
    const item = location.state?.item

    console.log(bodega)
    console.log(item)
    
    return (
        <header className='header'>
            {location.pathname === "/" && (
                <div>
                    <p>Hola</p>
                    <h1>{asesor}</h1>
                </div>
            )}
            {bodega && <h1>{bodega}</h1>}
            {item && <h1>{item}</h1>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Inventario'
}

export default Header
