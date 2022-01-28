import { useState, useEffect } from "react"
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

  useEffect(() => {
    const getInventario = async () => {
      await fetchInventario()
    }

    getInventario()
  }, [])

  const fetchInventario = async () => {
    const res = await fetch('http://localhost:5004/api/v1/inventario')
    const data = await res.json()

    setAsesor(data.data[0].asesor)
    setData(data.data)
  }

  const checkLogin = async (usuario, password) => {
    await axios
      .post('http://localhost:5004/api/v1/login', {
        email: usuario,
        password: password
      })
      .then(res => {
        console.log(res.data)
        if(res.data.token) {
          setIslogged(true)
          localStorage.setItem('logged', true)
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
