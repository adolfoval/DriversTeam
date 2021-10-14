import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPizzaSlice, faBeer} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


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
                        <a className="navbar-brand" href="/">Driver's Pub <FontAwesomeIcon icon={faBeer}/><FontAwesomeIcon icon ={faPizzaSlice} className="fa-pulse" /></a>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Inicio">Inicio</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" data-bs-toggle="dropdown"
                                    aria-expanded="false"> Administrar productos </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    {/* <li><Link className="dropdown-item" to="/RegistrarProductos">Registrar producto</Link></li> */}
                                    <li><Link className="dropdown-item" to="ListarProductos">Listar productos</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" data-bs-toggle="dropdown"
                                    aria-expanded="false">Administrar ventas</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link className="dropdown-item" to="/RegistrarVentas">Registrar venta</Link></li>
                                    <li><Link className="dropdown-item" to="/ListarVentas">Listar ventas</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/ListarUsuarios">Administrar usuarios</Link>
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
