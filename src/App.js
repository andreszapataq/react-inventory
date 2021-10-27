import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom"
import Header from './components/Header'
import Inventario from './components/Inventario'
import Bodegas from "./components/Bodegas"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [nombreBodega, setNombreBodega] = useState([])
  const [inventario, setInventario] = useState([])
  const [bodegas, setBodegas] = useState([])
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

    setNombreBodega(data.data[0].nombre)
    setInventario(data.data[0].stock)
    setBodegas(data.data)
    setAsesor(data.data[0].nombre_asesor)
  }

  return (
    <Router>
      <div className="App">
        <Header title={asesor} />
        <Switch>
          <Route exact path="/" >
            <Bodegas bodegas={bodegas} />
          </Route>
          <Route path="/inventario/:id">
            <Inventario inventario={inventario} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
