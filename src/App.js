import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
// import Login from "./components/Login"
import Public from "./components/Public"
import Bodegas from "./components/Bodegas"
import Inventario from './components/Inventario'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}

function PrivateRoute({ children, ...rest }) {
  return(
    <Route {...rest} render={() => {
      return fakeAuth.isAuthenticated === true
        ? children
        : <Redirect to='/login' />
    }} />
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
          <Route exact path="/auth" >
            <Public />
          </Route>
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
