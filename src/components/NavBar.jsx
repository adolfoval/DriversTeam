<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPizzaSlice, faBeer} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";
import { datosUsuario, onAuthStateChanged } from '../config/Firebase'


function NavBar() {


     const [usuario, setUsuario] = useState({displayName:undefined,email:undefined})


/*     useEffect(() => {
        consultaUsuario()
    }, [])

    const consultaUsuario = async () => {
        const user = await datosUsuario() 
        setUsuario(user)
    }  */


    useEffect(() => {
        cargarDatos()
    }, [])

    const cargarDatos = async () => {
        setUsuario(await datosUsuario()) 
        console.log("usuario ",usuario);
    }

    
=======
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faBeer } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useHistory } from "react-router-dom";
import { logOutUsuario } from "../config/Firebase";


function NavBar(props) {

    let history = useHistory();
    const rol = JSON.parse(localStorage.getItem("rol"));


    const handleSalir = (event) => {
        event.preventDefault();

        //console.log("Me salix2");
        props.func.setLog(false);
        history.replace("/");
        window.localStorage.clear();
        logOutUsuario();

    }

>>>>>>> 94f6d06d77cb6b8468a17550c9b168c91c1cb40c
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <NavLink activeClassName="active" className="navbar-brand" to="">Driver's Pub <FontAwesomeIcon icon={faBeer} /><FontAwesomeIcon icon={faPizzaSlice} className="fa-pulse" /></NavLink>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
                            </li>

                            {rol === "Vendedor" ? <li className="navbar-nav mx-auto mb-2 mb-lg-0 d-none">
                                <NavLink activeClassName="active" to="/ListarProductos" className="nav-link" aria-expanded="false"> Administrar productos </NavLink>
                            </li>
                                :
                                <li className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <NavLink activeClassName="active" to="/ListarProductos" className="nav-link" aria-expanded="false"> Administrar productos </NavLink>
                                </li>
                            }


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" data-bs-toggle="dropdown"
                                    aria-expanded="false">Administrar ventas</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
<<<<<<< HEAD
                                    <li><NavLink activeClassName="active"  className="dropdown-item" to="/RegistrarVentas">Registrar venta</NavLink></li>
=======
                                    <li><NavLink activeClassName="active" className="dropdown-item" to="/RegistrarVentas">Registrar venta</NavLink></li>
>>>>>>> 94f6d06d77cb6b8468a17550c9b168c91c1cb40c
                                    <li><NavLink className="dropdown-item" to="/ListarVentas">Listar ventas</NavLink></li>
                                </ul>
                            </li>

                            {   rol === "Vendedor" ?
                                <li className="nav-item d-none">
                                <NavLink activeClassName="active" className="nav-link" to="/ListarUsuarios">Administrar usuarios</NavLink>
                            </li>
                            :
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/ListarUsuarios">Administrar usuarios</NavLink>
                            </li>}


                        </ul>
                        <form className="d-flex">
                            <li className="nav-item dropdown">
                                
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button"
<<<<<<< HEAD
                                    data-bs-toggle="dropdown" aria-expanded="false">  { usuario ? usuario.displayName : "Login"  } </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="">Preferencias</Link></li>
                                    <li><Link className="dropdown-item" to="">Salir</Link></li>

=======
                                    data-bs-toggle="dropdown" aria-expanded="false">{window.localStorage.getItem("correo").replace(/"/g, '')}</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="">Preferencias</Link></li>
                                    <li><button className="dropdown-item" onClick={handleSalir} >Salir</button></li>
>>>>>>> 94f6d06d77cb6b8468a17550c9b168c91c1cb40c
                                </ul>
                                <h7 class="text-white bg-dark">{usuario ? usuario.email : ""}</h7>
                                
                            </li>
                            
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default NavBar
