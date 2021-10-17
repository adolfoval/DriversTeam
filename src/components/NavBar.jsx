import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPizzaSlice, faBeer} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";


function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <NavLink activeClassName="active" className="navbar-brand" to="">Driver's Pub <FontAwesomeIcon icon={faBeer}/><FontAwesomeIcon icon ={faPizzaSlice} className="fa-pulse" /></NavLink>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" aria-current="page" to="/Inicio">Inicio</NavLink>
                            </li>

                            <li className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <NavLink activeClassName="active" to="/ListarProductos" className="nav-link" aria-expanded="false"> Administrar productos </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" data-bs-toggle="dropdown"
                                    aria-expanded="false">Administrar ventas</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link activeClassName="active"  className="dropdown-item" to="/RegistrarVentas">Registrar venta</Link></li>
                                    <li><Link className="dropdown-item" to="/ListarVentas">Listar ventas</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/ListarUsuarios">Administrar usuarios</NavLink>
                            </li>


                        </ul>
                        <form className="d-flex">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false"> admin1@gmail.com</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="">Preferencias</Link></li>
                                    <li><Link className="dropdown-item" to="">Salir</Link></li>
                                </ul>
                            </li>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
