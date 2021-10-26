import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { } from 'bootstrap'
import { consultarDatabase } from '../../config/Firebase'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
// import {AgregarProducto} from './AgregarProducto';
// import { EditarProducto } from './EditarProductos';

function ListarProductos() {

    const [listaProductos, setListaProductos] = useState([])

    const cargarDatos = async () => {
        const listaTemporal = await consultarDatabase('productos')
        setListaProductos(listaTemporal)

    }

    useEffect(() => {
        cargarDatos()
    }, [])

    return (
        <div>
            <div className="container align-self-center">

                <br />

                <h1 className="mb-4 text-center">Productos</h1>

                <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Id producto, Descripcion, Valor unitario, Estado " aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-dark btn-sm " type="button" id="button-addon2">Buscar</button>
                </div>

                <Link to="ListarProductos/actualizar/agregar" type="button" className="btn btn-dark" >Agregar producto</Link>

                <table className="table caption-top table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id producto</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Valor unitario</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaProductos.map((producto) => {
                            // listaProductos.map((producto, index) => {
                                return (
                                    <tr key={producto.id}>
                                        {/* <th scope="row">{index + 1}</th> */}
                                        <th>{producto.id}</th>
                                        <td>{producto.descripcion}</td>
                                        <td>{producto.estado}</td>
                                        <td>{producto.valorUnitario}</td>
                                        <td>

                                            <Link to={`/ListarProductos/actualizar/${producto.id}`} className="btn btn-outline-primary btn-sm" title="Editar">
                                                <FontAwesomeIcon icon={faPenSquare} />
                                                </Link>



                                            <Link to={`/ListarProductos/eliminar/${producto.id}`} className="btn btn-outline-danger btn-sm" title="Eliminar">
                                                <FontAwesomeIcon icon={faTimes} />
                                                </Link>


                                        </td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListarProductos