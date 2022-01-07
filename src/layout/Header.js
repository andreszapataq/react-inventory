import { useLocation } from "react-router-dom"

const Header = ({ asesor }) => {
    let location = useLocation()
    const bodega = location.state?.bodega?.nombre
    const item = location.state?.item?.nombre
    const codigo = location.state?.item?.codigo

    return (
        <header className='header'>
            {location.pathname === "/" && (
                <div className="header-row-1">
                    <p>Hola</p>
                    <h1 className="text-asesor">{asesor}</h1>
                </div>
            )}
            {bodega && location.pathname.includes('/inventario/') &&
                <div className="header-row-1">
                    <h1 className="text-bodega">{bodega}</h1>
                </div>   
            }
            {item &&
                <>
                    <div className="header-row-1">
                        <h1 className="text-producto">{item}</h1>
                        <p>{codigo}</p>
                    </div>
                    <div className="header-row-2">
                        <p className="text-bodega-lotes">Ahora en... {bodega}</p>
                    </div>
                </>
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Inventario'
}

export default Header
