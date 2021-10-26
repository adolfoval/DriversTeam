import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import Login from "./components/Login";
import ListarUsuarios from './components/usuarios_components/ListarUsuarios';
import ListarVentas from './components/ventas_componnets/ListarVentas';
import ListarVentasEliminar from './components/ventas_componnets/ListarVentasEliminar';
import ListarProductos from './components/productos_components/ListarProductos';
import EliminarProductos from './components/productos_components/EliminarProductos';
import VerVenta from './components/ventas_componnets/VerVenta'
import VerVentaEliminarItem from './components/ventas_componnets/VerVentaEliminarItem'
import Error404 from './components/Error404';
import { useInfo } from "./useInfo";
import Error403 from "./components/Error403"
import ModificarUsuario from './components/usuarios_components/ModificarUsuario';
import EliminarUsuario from './components/usuarios_components/EliminarUsuario';




function LoginFunction(props) {
  return (
    <div>
      <Router>
        <Login func={props} />
        <Switch>
          <Route path="/" exact component={Inicio} />
        </Switch>
      </Router>

    </div>
  );

}

function NavBarFunction(props) {
  return (
    <div className="mx-auto">

      <Router>
        <NavBar func={props} />
        <Switch>

          {/* <Route path="/Inicio" exact component={Inicio} /> */}

          <Route path="/" exact component ={Inicio}/>
          <Route path="/Login" exact component ={Login}/>
          <Route path="/ListarUsuarios" exact component ={ListarUsuarios}/>
          <Route path="/ModificarUsuario/:id/:correo/:rol/:estado" exact component ={ModificarUsuario}/>
          <Route path="/EliminarUsuario/:id" exact component ={EliminarUsuario}/>
          <Route path="/ListarVentas" exact component ={ListarVentas}/>
          <Route path="/ListarVentas/delete/:id"  component ={ListarVentasEliminar}/>
          <Route path="/Venta/:id/delete/:item" component ={VerVentaEliminarItem}/>
          <Route path="/Venta/:id" component ={VerVenta}/>
          <Route path="/Venta" component ={VerVenta}/>
          <Route path="/ListarProductos/delete/:id" component ={EliminarProductos}/>
          <Route path="/ListarProductos" exact component ={ListarProductos}/>
          <Route path="/" exact component ={Login}/>
          <Route path="*" component ={Error404}/>
          <Route path="/Error403" component ={Error403}/>
        </Switch>
      
      </Router>

    </div>
  );
}


function App() {

  //let userIsloged = false;
  const [isLoged, SetisLoged] = useInfo('isLoged', false);
  // console.log(auth);

  const setLog = (value) => {
    SetisLoged(value);
    //userIsloged = value;
    //console.log(Isloged);
  };

  if (!isLoged) {
    return (
      <LoginFunction setLog={setLog} />
    );
  } else {
    return (
      <NavBarFunction setLog={setLog} />
    );
  }
}

export default App;
