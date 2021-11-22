import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect // REDIRECT DE LA LÍNEA 32?
} from "react-router-dom"
import Login from "./components/Login"
import Bodegas from "./components/Bodegas"
import Inventario from './components/Inventario'
import { Component } from "react" // COMPONENT DE LA LÍNEA 14?
import Layout from "./layout/Layout"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLogged, setIsLogged] = useState(true)
  const [sessionExpired, setSessionExpired] = useState(false)
  
  if(sessionExpired) {
    setSessionExpired(true)
    return <Login />
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <div className="App">
            <Layout>
              <Component {...props} />
            </Layout>
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

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
          <Route exact path="/login" component={Login} />
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
