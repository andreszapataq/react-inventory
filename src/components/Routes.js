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
    const [isLogged, setIsLogged] = useState([])
    const [sessionExpired, setSessionExpired] = useState([])

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
                <PublicRoute restricted={true} component={Login} path="/login" exact />
                <PrivateRoute component={Bodegas} exact path="/" />
                <PrivateRoute component={Inventario} exact path="/inventario/:id" />
            </Switch>
        </div>
    )
}

export default Routes
