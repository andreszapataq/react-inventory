import { Link } from "react-router-dom"

const Login = ({ login }) => {
    return (
        <div className='login'>
            <div className="login-brand">
                <a href="/">
                    <img src="" alt="Logo" />
                </a>
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
