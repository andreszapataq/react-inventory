import { useLocation } from "react-router-dom"

const Header = ({ asesor }) => {
    let location = useLocation()
    const bodega = location.state?.bodega?.nombre
    const item = location.state?.item?.nombre
    const codigo = location.state?.item?.codigo
    const lote = location.state?.el
    const crearBodega = location.state

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
                    <h1 className={bodega.length < 25 ? "text-bodega-xl" : "text-bodega-md"}>{bodega}</h1>
                </div>   
            }
            {item &&
                <>
                    <div className="header-row-1">
                        <h1 className={item.length < 30 ? "text-header-xl" : "text-header-md"}>{item}</h1>
                        <p>{codigo}</p>
                    </div>
                    <div className="header-row-2">
                        <p className="text-header-bodega">Ahora en... {bodega}</p>
                    </div>
                </>
            }
            {lote &&
                <>
                    <div className="header-row-1">
                        <h1 className="text-header-xl">{lote.lote}</h1>
                        <p>{lote.fecha_vencimiento}</p>
                    </div>
                </>
            }
            {crearBodega &&
                <div className="header-row-1">
                    <h1 className="text-bodega">{crearBodega.title}</h1>
                </div>
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Inventario'
}

export default Header
