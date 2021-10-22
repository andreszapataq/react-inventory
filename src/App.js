import { useState, useEffect } from "react"
import Header from './components/Header'
import Inventario from './components/Inventario'
import Clientes from "./components/Clientes"

function App() {
  const [nombre, setNombre] = useState([])
  const [inventario, setInventario] = useState([])
  const [clientes, setClientes] = useState([])
  /* const [obj, setObj] = useState({
    nombre: [],
    inventario: []
  }) */

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

    setNombre(data.data[0].nombre)
    setInventario(data.data[0].stock)
    setClientes(data.data)
  }

  return (
    <div className="App">
      <Clientes clientes={clientes} />
      <Header title={nombre} />
      <Inventario inventario={inventario} />
    </div>
  )
}

export default App
