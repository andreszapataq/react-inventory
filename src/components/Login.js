import { Link } from "react-router-dom"
import logo from "../img/logo.png"

const Login = ({ login }) => {
    return (
        <div className='login'>
            <div className="login-brand">
                <img src={logo} alt="Logo" />
            </div>
            <input type="text" />
            <input type="password" />
            <Link to="/" onClick={login}>
                <button type="button" className="btn">Entrar</button>
            </Link>
        </div>
    )
}

export default Login
