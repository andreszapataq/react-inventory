import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"

const Footer = ({ logout }) => {
    return (
        <footer>
            <div className="plus-icon">
                <FontAwesomeIcon icon={faCirclePlus} className="fa-2x" />
            </div>
            <div className="footer-copy">
                <p onClick={logout} className="footer-logout-text">Cerrar sesión</p>
                <p className="footer-creator-text">Powered by Ness Digital</p>
            </div>
            <div className="home-icon">
                <Link to="/">
                    <FontAwesomeIcon icon={faHouse} className="fa-2x" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
