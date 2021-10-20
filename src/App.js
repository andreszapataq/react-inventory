import { useState, useEffect } from "react"
import Header from './components/Header'
import Inventario from './components/Inventario'

function App() {
  const [nombre, setNombre] = useState([])
  const [inventario, setInventario] = useState([])

  useEffect(() => {
    const getNombre = async () => {
      const nombreFS = await fetchNombre()
      setNombre(nombreFS)
    }

    const getItems = async () => {
      const itemsFS = await fetchItems()
      setInventario(itemsFS)
    }

    getNombre()
    getItems()
  }, [])

  const fetchNombre = async () => {
    const res = await fetch('http://localhost:5004/api/v1/inventario')
    const data = await res.json()

    return data.data[0].nombre
  }

  const fetchItems = async () => {
    const res = await fetch('http://localhost:5004/api/v1/inventario')
    const data = await res.json()

    console.log(data.data)
    return data.data[0].stock
  }

  return (
    <div className="App">
      <Header title={nombre} />
      <Inventario inventario={inventario} />
    </div>
  )
}

export default App
