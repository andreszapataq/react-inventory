import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className='login'>
            <input type="text" />
            <input type="password" />
            <Link to="/">
                <button type="button">Entrar</button>
            </Link>
        </div>
    )
}

export default Login
