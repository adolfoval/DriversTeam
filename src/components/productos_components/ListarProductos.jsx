import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { consultarDatabase } from '../../config/Firebase'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTimes } from "@fortawesome/free-solid-svg-icons";


function ListarProductos() {

    const [listaProductos, setListaProductos] = useState([])
    useEffect(() => {
        cargarDatos()
    }, [])

    const cargarDatos = async () => {
        const listaTemporal = await consultarDatabase('productos')
        setListaProductos(listaTemporal)

    }

    return (
        <div>
            <div className="container align-self-center">


                <h1 className="mb-4 text-center">Productos</h1>

                <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Id producto, Descripcion, Valor unitario, Estado " aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-dark btn-sm " type="button" id="button-addon2">Buscar</button>
                </div>

                <button type="button" className="btn btn-outline-dark btn-sm " data-bs-toggle="modal" data-bs-target="#modalRegistroProducto">
                    Agregar producto
                </button>

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

                            listaProductos.map((producto, index) => {
                                return (
                                    <tr key={producto.id}>
                                        {/* <th scope="row">{index + 1}</th> */}
                                        <th>{producto.id}</th>
                                        <td>{producto.descripcion}</td>
                                        <td>{producto.valorUnitario}</td>
                                        <td>{producto.estado}</td>
                                        <td>
                                            {
                                                <Link to={`/ListarProductos/${producto.id}`}>
                                                    <button className="btn btn-outline-primary btn-sm" title="Editar"><FontAwesomeIcon icon={faPenSquare} /></button>
                                                </Link>
                                            }
                                            {
                                                <Link to={`/ListarProductos/delete/${producto.id}`}>
                                                    <button className="btn btn-outline-danger btn-sm" title="Eliminar"><FontAwesomeIcon icon={faTimes} /></button>
                                                </Link>
                                            }
                                        </td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>

                <div class="modal fade" id="modalRegistroProducto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Registro de Producto</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="formulario-registro-producto">

                                    <div class="mb">
                                        <label for="descripcion" class="col-form-label">Descripción del Producto:</label>
                                        <input type="text" class="form-control" id="descripcion"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="valor unit" class="col-form-label">Valor Unitario:</label>
                                        <input type="number" class="form-control" id="valor-unitario"/>
                                    </div>

                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Estado:</label>
                                        <select class="form-select" id="estadoProducto" aria-label="Default select example">
                                            <option selected disabled>Seleccione un estado</option>
                                            <option value="Disponible">Disponible</option>
                                            <option value="No disponible">No disponible</option>

                                        </select>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Confirmar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default ListarProductos