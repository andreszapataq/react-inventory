import { useState } from "react"
import logo from "../img/logo.png"

const Login = ({ checkLogin }) => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div className='login'>
            <div className="login-brand">
                <img src={logo} alt="Logo" />
            </div>
            <label htmlFor="user">Usuario</label>
            <input type="text" className="input-user" id="user" value={usuario} onChange={e => setUsuario(e.target.value)} />
            <label htmlFor="password">Contraseña</label>
            <input type="password" className="input-password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="button" className="button-login" onClick={() => {
                checkLogin(usuario, password)
            }}>Entrar</button>
        </div>
    )
}

export default Login
