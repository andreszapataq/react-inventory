import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './components/Header'
import Inventario from './components/Inventario'
import Clientes from "./components/Clientes"

function App() {
  const [nombre, setNombre] = useState([])
  const [inventario, setInventario] = useState([])
  const [clientes, setClientes] = useState([])
  const [asesor, setAsesor] = useState([])
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
    setAsesor(data.data[0].nombre_asesor)
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header title={asesor} />
            <Link to="/principal">
              <Clientes clientes={clientes} />
            </Link>
          </Route>
          <Route path="/principal">
            <Header title={nombre} />
            <Inventario inventario={inventario} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
