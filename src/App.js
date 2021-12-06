import { useState, useEffect } from "react"
import {
  Routes,
  Route
} from "react-router-dom"
import Login from "./components/Login"
import Layout from "./layout/Layout"
import Bodegas from "./components/Bodegas"
import Inventario from "./components/Inventario"

function App() {
  const [asesor, setAsesor] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const getInventario = async () => {
    await fetchInventario()
    }

    getInventario()
  }, [])

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
        <Route element={<Layout asesor={asesor} />}>
          <Route path="/" element={<Bodegas bodegas={data} />} />
          <Route path="/inventario/:id" element={<Inventario />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
