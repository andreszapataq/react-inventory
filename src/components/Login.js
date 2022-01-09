import { Link } from "react-router-dom"
import logo from "../img/logo.png"

const Login = ({ login }) => {
    return (
        <div className='login'>
            <div className="login-brand">
                <img src={logo} alt="Logo" />
            </div>
            <label htmlFor="user">Usuario</label>
            <input type="text" id="user"/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" />
            <Link to="/" onClick={login}>
                <button type="button">Entrar</button>
            </Link>
        </div>
    )
}

export default Login
