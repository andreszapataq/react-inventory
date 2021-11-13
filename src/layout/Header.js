const Header = ({ asesor, bodega, isHome }) => {
    return (
        <header className='header'>
            {isHome && (
                <div>
                    <p>Hola</p>
                    <h1>{asesor}</h1>
                </div>
            )}
            {bodega && <h1>{bodega.nombre}</h1>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Inventario'
}

export default Header
