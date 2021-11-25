import { Redirect, Switch } from "react-router-dom" // REACT ROUTER OR DOM?
import Layout from "../layout/Layout"

const Routes = () => {
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

            </Switch>
        </div>
    )
}

export default Routes
