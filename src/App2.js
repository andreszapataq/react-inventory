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
import CrearBodega from "./components/CrearBodega"
import Inventario from "./components/Inventario"
import Lotes from "./components/Lotes"
import LotePage from "./components/LotePage"

function App() {
  const [lote, setLote] = useState([])
  const [asesores, setAsesores] = useState([])
  const [asesor, setAsesor] = useState([])
  const [data, setData] = useState([])
  const [isLogged, setIslogged] = useState(JSON.parse(localStorage.getItem('logged')))
  const [token, setToken] = useState(localStorage.getItem('token'))
  
  const navigate = useNavigate()
  
  // let token = ''
  // const bcrypt = require('bcryptjs')

  useEffect(() => {
    const getInventario = async () => {
      await fetchInventario(token)
    }

    const getAsesores = async () => {
      await fetchAsesores(token)
    }

    const getLotes = async () => {
      await fetchLote(token)
    }

    if(token) getAsesores()
    if(token) getInventario()
    if(token) getLotes()
  }, [token])

  const fetchLote = async (token) => {
    const res = await fetch('http://localhost:5004/api/v1/lote', {
      headers: {
        authToken: token
      }
    })
    const lotes = await res.json()

    setLote(lotes.data)
  }

  console.log(lote)

  const fetchInventario = async (token) => {
    const res = await fetch('http://localhost:5004/api/v1/inventario', {
      headers: {
        authToken: token
      }
    })
    const data = await res.json()

    setAsesor(data.data[0].asesor)
    setData(data.data)
  }

  console.log(data)

  const fetchAsesores = async (token) => {
    const res = await fetch('http://localhost:5004/api/v1/asesores', {
      headers: {
        authToken: token
      }
    })
    const asesores = await res.json()

    setAsesores(asesores.data)
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
        let freshToken = res.data
        if(freshToken) {
          setIslogged(true)
          setToken(freshToken)
          localStorage.setItem('logged', true)
          localStorage.setItem('token', freshToken)
          fetchInventario(freshToken)
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

        <Route element={<PrivateLayout asesor={asesor} data={data} isLogged={isLogged} logout={logout} />}>
          <Route path="/" element={<Bodegas bodegas={data} />} />
          <Route path="/crear-bodega" element={<CrearBodega asesores={asesores} />} />
          <Route path="/inventario/:id" element={<Inventario />} />
          <Route path="/lotes/:id" element={<Lotes />} />
          <Route path="/lotepage/:id" element={<LotePage bodegas={data} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App