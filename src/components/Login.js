import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../img/logo.png"

const Login = (props) => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='login'>
            <div className="login-brand">
                <img src={logo} alt="Logo" />
            </div>
            <label htmlFor="user">Usuario</label>
            <input type="text" id="user" value={usuario} onChange={e => setUsuario(e.target.value)}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Link to="/" onClick={(e) => {
                e.preventDefault()
                props.login(usuario, password)
            }}>
                <button type="button">Entrar</button>
            </Link>
        </div>
    )
}

export default Login
