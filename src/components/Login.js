import { Link } from "react-router-dom"

const Login = ({ onClick }) => {
    return (
        <div className="login">
            <input type="text" placeholder="Usuario"></input>
            <input type="password" placeholder="Password"></input>
            <Link to="/">
                <button type="button">Entrar</button>
            </Link>
        </div>
    )
}

export default Login
