import { useState } from "react"
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom"
import axios from "axios"

import Login from "./components/Login"
import PrivateLayout from "./layout/PrivateLayout"
import Bodegas from "./components/Bodegas"
import Inventario from "./components/Inventario"
import Lotes from "./components/Lotes"

function App() {
  const [asesor, setAsesor] = useState([])
  const [data, setData] = useState([])
  const [isLogged, setIslogged] = useState(JSON.parse(localStorage.getItem('logged')))
  const navigate = useNavigate()
  let token = ''
  // const bcrypt = require('bcryptjs')

  /* useEffect(() => {
    const getInventario = async () => {
      await fetchInventario()
    }

    getInventario()
  }, []) */

  const fetchInventario = async () => {
    const res = await fetch('http://localhost:5004/api/v1/inventario', {
      headers: {
        authToken: localStorage.getItem('token', token)
      }
    })
    const data = await res.json()

    setAsesor(data.data[0].asesor)
    setData(data.data)
  }

  const checkLogin = async (usuario, password) => {
    /* const sugar = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, sugar) */
    
    await axios
      .post('http://localhost:5004/api/v1/login', {
        email: usuario,
        password: password
      })
      .then(res => {
        console.log(res.data)
        const token = res.data
        if(token) {
          setIslogged(true)
          localStorage.setItem('logged', true)
          localStorage.setItem('token', token)
          fetchInventario()
          navigate('/')
        }
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  const logout = () => {
    setIslogged(false)
    localStorage.setItem('logged', false)
    localStorage.setItem('token', '')
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login checkLogin={checkLogin} />} />

        <Route element={<PrivateLayout asesor={asesor} isLogged={isLogged} logout={logout} />}>
          <Route path="/" element={<Bodegas bodegas={data} />} />
          <Route path="/inventario/:id" element={<Inventario />} />
          <Route path="/lotes/:id" element={<Lotes />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
