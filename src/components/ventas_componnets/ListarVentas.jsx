import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenSquare} from "@fortawesome/free-solid-svg-icons";

function ListarVentas() {
    return (
        <div>
            <div className="container align-self-center">


                <h1 className="mb-4 text-center">Ventas</h1>

                <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Id venta, Id cliente, Cliente " aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-dark btn-sm " type="button" id="button-addon2">Buscar</button>
                </div>

                {/* <!-- <a className="btn btn-dark" href="formulario_ventas.html">
                                Agregar ventas
                            </a> --> */}

                <button type="button" className="btn btn-outline-dark btn-sm " data-bs-toggle="modal" data-bs-target="#modalRegistroVenta">
                    Agregar venta
                </button>

                <table className="table caption-top table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id venta</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Productos</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Valor/unit</th>
                            <th scope="col">Valor venta</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Id cliente</th>
                            <th scope="col">Vendedor</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">


                        <tr>
                            <th scope="row">001</th>
                            <td>En proceso</td>
                            <td>27-sep-2021</td>
                            <td> <ul>Hamburguesa</ul><ul>Cerveza</ul>  </td>
                            <td> <ul>2</ul><ul>2</ul></td>
                            <td> <ul>20.000</ul><ul>30.000</ul>  </td>
                            <td> 100.000 </td>
                            <td> Juan Sanchez </td>
                            <td> 123456789 </td>
                            <td> Enrique Perez </td>
                            <td><button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#modalEditar"
                                idVenta="001" cliente="Juan Sanchez" idCliente="123456789"><FontAwesomeIcon icon={faPenSquare}/></button></td>
                        </tr>
                        <tr>
                            <th scope="row">002</th>
                            <td>En proceso</td>
                            <td>28-sep-2021</td>
                            <td> Nachos </td>
                            <td> 3 </td>
                            <td> 20.000 </td>
                            <td> 60.000 </td>
                            <td> Felipe Clavijo </td>
                            <td> 12345600 </td>
                            <td> Viviana Mejia </td>
                            <td><button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#modalEditar"
                                cliente="Felipe Clavijo" data-bs-whatever="20.000"><FontAwesomeIcon icon={faPenSquare}/></button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListarVentas
