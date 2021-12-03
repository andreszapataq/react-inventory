import { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./Login";
import Bodegas from "./Bodegas";
import Inventario from "./Inventario";

const Routes = () => {
  const [asesor, setAsesor] = useState([]);
  const [data, setData] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState("");

  // useEffect(() => {
  // const getInventario = async () => {
  // await fetchInventario()
  // };
  // const getLogged = () => {
  //   onClick();
  // };
  // getLogged();
  // getInventario();
  // }, []);

  const onClick = () => {
    console.log("asdfds");
    if (user === "cali") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  const onChange = (value) => {
    console.log(value);
    setUser(value);
  };

  const fetchInventario = async () => {
    const res = await fetch("http://localhost:5004/api/v1/inventario");
    const data = await res.json();

    console.log(data.data);

    setAsesor(data.data[0].nombre_asesor);
    setData(data.data);
  };

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLogged ? (
            <div className="App">
              {/* <Navigation /> */}
              <main>
                <Component {...props} />
              </main>
            </div>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  };

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
    );
  };
  return (
    <div>
      <Switch>
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PrivateRoute component={Bodegas} path="/" exact />
        <PrivateRoute component={Inventario} path="/inventario/:id" exact />
      </Switch>
    </div>
  );
};

export default Routes;
