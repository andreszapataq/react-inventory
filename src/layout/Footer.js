const Footer = ({ logout }) => {
    return (
        <footer>
            <p onClick={logout} className="footer-logout">Cerrar sesión</p>
            <p>Powered by Ness Digital</p>
        </footer>
    )
}

export default Footer
