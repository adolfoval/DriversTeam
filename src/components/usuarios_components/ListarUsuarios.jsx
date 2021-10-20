import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import Error403 from "../Error403";

function Usuarios() {
    const background = { backgroundImage: "none" };
    const rol = JSON.stringify(localStorage.getItem("rol")).
    replace(/"/g, '').replaceAll("/").replace(/\\/g, '');

    if(rol === "Administrador"){
    return (
        <div style={background}>
            <div className="container align-self-center p-4">

                <div className="row">
                    <table className="table caption-top table-hover" id="users">
                        <caption className="text-center ">Lista de usuarios</caption>
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Rol</th>
                                <th scope="col">Estado</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody id="tableBody">
                            <tr>
                                <td>QucgkWZb4TjwRKxokPlP</td>
                                <td>Larry Loom</td>
                                <td>admin2@gmail.com</td>
                                <td>-</td>
                                <td>Pendiente</td>
                                <td>
                                    <button type="button" className="btn btn-outline-dark" title="Modificar"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        data-user="Larry Loom" data-bs-whatever="admin2@gmail.com">
                                        <FontAwesomeIcon icon={faPenSquare} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modificar usuario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Correo:</label>
                                    <input type="text" className="form-control" id="recipient-name" readOnly />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="estado" className="col-form-label">Estado:</label>
                                    <select className="form-select" id="estado" aria-label="Default select example">
                                        <option defaultValue disabled value="Ninguno">Seleccione un estado</option>
                                        <option value="Pendiente">Pendiente</option>
                                        <option value="No autorizado">No autorizado</option>
                                        <option value="Autorizado">Autorizado</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rol" className="col-form-label">Rol:</label>
                                    <select className="form-select" id="rol" aria-label="Default select example">
                                        <option defaultValue disabled value="Ninguno">Seleccione un rol</option>
                                        <option value="Administrador" id="Administrador">Administrador</option>
                                        <option value="Vendedor" id="Vendedor">Vendedor</option>
                                        <option value="Ninguno" id="Ninguno">-</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" id="cerrar" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" id="modificar" className="btn btn-success">Modificar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }else{
        return(
            <Error403/>
        )
    }
}

export default Usuarios
