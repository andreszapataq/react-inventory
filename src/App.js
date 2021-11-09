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
        <Layout asesor={asesor} data={bodegas}>
          <Switch>
            <Route exact path="/" >
              <Bodegas bodegas={bodegas} />
            </Route>
            <Route path="/inventario/:id">
              <Inventario inventario={inventario} />
            </Route>
          </Switch>
          {/* <InputText label="Institución" /> */}
        </Layout>
      </div>
    </Router>
  )
}

export default App
