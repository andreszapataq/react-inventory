import Layout from "./layout/Layout"
import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
// import { InputText } from "@ness-digital/react-ui"
import Inventario from './components/Inventario'
import Bodegas from "./components/Bodegas"

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
              <Layout asesor={asesor}>
                <Bodegas bodegas={data} />
              </Layout>
            </Route>
            <Route path="/inventario/:id">
              <Layout bodega={data}>
                <Inventario inventario={inventario} />
              </Layout>
            </Route>
          </Switch>
          {/* <InputText label="Institución" /> */}
      </div>
    </Router>
  )
}

export default App
