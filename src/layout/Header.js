const Header = ({ asesor, bodega, bodegax }) => {
    return (
        <header className='header'>
            <h1>{bodegax}</h1>
            {console.log(bodegax)}
        </header>
    )
}

Header.defaultProps = {
    title: 'Inventario'
}

export default Header
