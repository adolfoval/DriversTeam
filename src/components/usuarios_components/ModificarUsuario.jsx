import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import {actualizarDocumentoDatabase} from '../../config/Firebase';

function ModificarUsuario() {

    let history = useHistory();
    const user = useParams();
    const [role, setRole] = useState("");
    const [state, setState] = useState("");

    const hadleModify = (event) => {

        event.preventDefault();
        if(role === user.rol && state === user.estado){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'No se ha modificado la informacio, por favor elija opciones diferentes.',
                showConfirmButton: false,
                timer: 1900
            });
            return;

        }else if(!role.trim() || !state.trim()){ 

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'No se ha modificado la informacion, por favor elija opciones diferentes.',
                showConfirmButton: false,
                timer: 1900
            });
            return;

        }else{
            
            if(state === "No autorizado" || state === "Pendiente"){
                if(role !== "Ninguno"){
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'No puede asignar rol con ese estado, por favor elija opciones diferentes.',
                        showConfirmButton: false,
                        timer: 1900
                    });
                    return;
                }

                const data = {
                    estado : state,
                    rol: role
                }
                actualizarDocumentoDatabase("usuarios", user.id, data);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Usuario modificado con exito',
                    showConfirmButton: false,
                    timer: 1900
                });
                history.push("/ListarUsuarios");
                
            }else{
                console.log("entro")
                const data = {
                    estado : state,
                    rol: role
                }
                actualizarDocumentoDatabase("usuarios", user.id, data);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Usuario modificado con exito',
                    showConfirmButton: false,
                    timer: 1900
                });
                history.push("/ListarUsuarios");
            }
            
        } 
    }

    return (

        <div className=" container align-self-center w-50">

            <h1 className="mb-4 text-center">Modificar usuario</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Correo:</label>
                    <input type="text" className="form-control form-control-sm" value={user.correo} id="recipient-name" readOnly />
                </div>
                <div className="mb-3">
                    <label htmlFor="estado" className="col-form-label">Estado:</label>
                    <select className="form-select form-control-sm" 
                    id="estado" 
                    aria-label="Default select example"
                    onChange ={(event)=> setState(event.target.value)}>

                        <option disabled value="Ninguno">Seleccione un estado</option>
                        {
                            user.estado === "Autorizado" ?
                                <option defaultValue value="Autorizado">Autorizado</option>
                                :
                                ""
                        }
                        {
                            user.estado === "Pendiente" ?
                                <option defaultValue value="Pendiente">Pendiente</option>
                                :
                                ""
                        }
                        {
                            user.estado === "No autorizado" ?
                                <option defaultValue value="No autorizado">No autorizado</option>
                                :
                                ""
                        }
                        {user.estado !== "Pendiente" ? <option value="Pendiente">Pendiente</option> : ""}
                        {user.estado !== "No autorizado" ? <option value="No autorizado">No autorizado</option> : ""}
                        {user.estado !== "Autorizado" ? <option value="Autorizado">Autorizado</option> : ""}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="rol" className="col-form-label">Rol:</label>
                    <select className="form-select form-control-sm" 
                    id="rol" 
                    aria-label="Default select example"
                    onChange = {(event)=> setRole(event.target.value)}>


                        <option disabled value="Ninguno">Seleccione un rol</option>
                        
                        {
                            user.rol === "Administrador" ? 
                            <option defaultValue value="Administrador" id="Administrador">Administrador</option>
                            : ""
                        }

                        {
                            user.rol === "Vendedor" ?
                            <option defaultValue value="Vendedor" id="Vendedor">Vendedor</option>
                            : ""
                        }

                        {
                            user.rol === "Ninguno" ?
                            <option defaultValue value="Ninguno" id="Ninguno">-</option>
                            : ""
                        }

                        {user.rol !== "Administrador" ? <option value="Administrador" id="Administrador">Administrador</option> : ""}
                        {user.rol !== "Vendedor" ?<option value="Vendedor" id="Vendedor">Vendedor</option> : ""}
                        {user.rol !== "Ninguno" ?<option value="Ninguno" id="Ninguno">-</option> :""}
                    </select>
                </div>

                <div className="d-flex justify-content-center pt-3">
                    <button className="btn btn-outline-primary w-25" onClick={hadleModify}>
                        Modificar
                    </button>
                </div>

                <div className="d-flex justify-content-center pt-3">
                    <Link to ="/ListarUsuarios" className="btn btn-outline-danger w-25">
                        Cancelar
                    </Link>
                </div>

            </form>
        </div>

    )
}

export default ModificarUsuario
