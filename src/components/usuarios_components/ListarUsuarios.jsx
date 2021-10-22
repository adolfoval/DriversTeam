import React, { useEffect, useState } from 'react'
import { consultarDatabase } from '../../config/Firebase'
import Error403 from "../Error403";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTimes } from "@fortawesome/free-solid-svg-icons";


function Usuarios() {
    const background = { backgroundImage: "none" };
    const rol = JSON.stringify(localStorage.getItem("rol")).
    replace(/"/g, '').replaceAll("/").replace(/\\/g, '');

    const [listaUsuarios, setListaUsuarios] = useState([])

    useEffect(() => {
        cargarDatos()
    }, [])

    const cargarDatos = async () => {
        if (rol === "Administrador"){
            const listaTemporal = await consultarDatabase('usuarios')
            setListaUsuarios(listaTemporal)
        }
        
    }

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
                            {
                                listaUsuarios.map((usuario, index) => {
                                    return (
                                    <tr key={usuario.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{usuario.nombre}  </td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.rol}</td>
                                        <td>{usuario.estado}</td>
                                        <td>
                                        {                               
                                            <Link to={`/ListarUsuarios/${usuario.id}`}>
                                                <button className="btn btn-outline-primary btn-sm" title="Editar"><FontAwesomeIcon icon={faPenSquare}/></button>
                                            </Link>
                                        }
                                        {                               
                                            <Link to={`/ListarUsuarios/delete/${usuario.id}`}>
                                                <button className="btn btn-outline-danger btn-sm" title="Eliminar"><FontAwesomeIcon icon={faTimes}/></button>
                                            </Link>
                                        }
                                        </td>
                                    </tr>)
                                })
                            }
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
