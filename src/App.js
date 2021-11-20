import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Bodegas from "./components/Bodegas"
import Inventario from './components/Inventario'

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
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Bodegas asesor={asesor} bodegas={data} />
          </Route>
          <Route exact path="/inventario/:id" component={Inventario} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
