import { useState, useEffect } from "react"
import {
    Route,
    Redirect,
    Switch
} from "react-router-dom"
import Layout from "../layout/Layout"
import Login from "./Login"
import Bodegas from "./Bodegas"
import Inventario from "./Inventario"

const Routes = () => {
    const [asesor, setAsesor] = useState([])
    const [data, setData] = useState([])
    const [isLogged, setIsLogged] = useState(true)
    const [sessionExpired, setSessionExpired] = useState(false)

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

    const PrivateRoute = ({ component: Component, ...rest }) => {
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

    const PublicRoute = ({ component: Component, restricted, ...rest }) => {
        return (
          <Route
            {...rest}
            render={(props) =>
              isLogged && restricted ? (
                <Redirect to={props.path} />
              ) : (
                <Component {...props} />
              )
            }
          />
        )
    }
    
    return (
        <div>
            <Switch>
                <PublicRoute restricted={true} component={Login} exact path="/login" />

                <PrivateRoute component={Bodegas} exact path="/" />
                <PrivateRoute component={Inventario} exact path="/inventario/:id" />
            </Switch>
        </div>
    )
}

export default Routes
