const Footer = ({ logout }) => {
    return (
        <footer>
            <button onClick={logout}>Cerrar sesión</button>
            <p>Powered by Ness Digital</p>
        </footer>
    )
}

export default Footer
