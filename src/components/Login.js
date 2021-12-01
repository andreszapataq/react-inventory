import { Link } from "react-router-dom"

const Login = ({onClick}) => {
    return (
        <div className='login'>
            <input type="text" />
            <input type="password" />
            <Link to="/">
                <button type="button" onClick={onClick}>Entrar</button>
            </Link>
        </div>
    )
}

export default Login
