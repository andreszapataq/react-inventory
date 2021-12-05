import { useState, useEffect } from "react"
import {
  Routes,
  Route
} from "react-router-dom"
import Layout from "./layout/Layout"
import Login from "./components/Login"
import Bodegas from "./components/Bodegas"

function App() {
  const [asesor, setAsesor] = useState([])
  const [data, setData] = useState([])
  // const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const getInventario = async () => {
    await fetchInventario()
    }

    /* const getLogged = () => {
      onClick()
    }

    getLogged() */
    getInventario()
  }, [])

  /* const onClick = () => {
    setIsLogged(true)
  } */

  const fetchInventario = async () => {
    const res = await fetch('http://localhost:5004/api/v1/inventario')
    const data = await res.json()

    console.log(data.data)

    setAsesor(data.data[0].nombre_asesor)
    setData(data.data)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout asesor={asesor} isHome={true} />}>
          <Route path="/" element={<Bodegas bodegas={data} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
