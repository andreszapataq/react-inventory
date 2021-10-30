const Header = ({ title }) => {
    return (
        <header className='header'>
            <p>Hola</p>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Inventario'
}

export default Header
