import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import Login from "./components/Login";
import ListarUsuarios from './components/usuarios_components/ListarUsuarios';
import RegistrarVentas from './components/ventas_componnets/RegistrarVentas';
import ListarVentas from './components/ventas_componnets/ListarVentas';
import ListarProductos from './components/productos_components/ListarProductos';
import Error404 from './components/Error404';




function App() {
  return (
    <div className="mx-auto">
      <Router>
        
        <NavBar />
        <Switch>
          <Route path="/Inicio" exact component ={Inicio}/>
          <Route path="/Login" exact component ={Login}/>
          <Route path="/ListarUsuarios" exact component ={ListarUsuarios}/>
          <Route path="/RegistrarVentas" exact component ={RegistrarVentas}/>
          <Route path="/ListarVentas" exact component ={ListarVentas}/>
          <Route path="/ListarProductos" exact component ={ListarProductos}/>
          <Route path="*" component ={Error404}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
