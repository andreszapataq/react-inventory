import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
// import { InputText } from "@ness-digital/react-ui"
import Bodegas from "./components/Bodegas"
import Inventario from './components/Inventario'

function App() {
  const [asesor, setAsesor] = useState([])
  const [inventario, setInventario] = useState([])
  const [data, setData] = useState([])

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

    setAsesor(data.data[0].nombre_asesor)
    setInventario(data.data[0].stock)
    setData(data.data)
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Bodegas asesor={asesor} bodegas={data} />
          </Route>
          <Route path="/inventario/:id">
            <Inventario bodega={data} inventario={inventario} />
          </Route>
        </Switch>
        {/* <InputText label="Institución" /> */}
      </div>
    </Router>
  )
}

export default App
