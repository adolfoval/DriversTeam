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

    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [listaUsuariosAutorizados, setListaUsuariosAutorizados] = useState([]);
    const [listaUsuariosEliminados, setListaUsuariosEliminados] = useState([]);
    const [listarEliminados, setListarEliminados] = useState(true);

    useEffect(() => {
        cargarDatos()
    }, [])

    useEffect(() => {
        cargarAutorizados();
        cargarEliminados();
    }, [listaUsuarios])


    const cargarDatos = async () => {
        if (rol === "Administrador") {
            const listaTemporal = await consultarDatabase('usuarios')
            setListaUsuarios(listaTemporal)
        }

    }

    const cargarAutorizados = () =>{
        
        setListaUsuariosAutorizados(
            listaUsuarios.filter((doc) => (
                doc.estado === "Autorizado"
            ))
        );
    }

    const cargarEliminados = () =>{

        setListaUsuariosEliminados(
            listaUsuarios.filter((doc) => (
                doc.estado !== "Autorizado"
            ))
        );
    }

    const handleVer = (event) => {
        event.preventDefault();
        setListarEliminados(!listarEliminados);
    }

    if (rol === "Administrador") {


        return (
            <div style={background}>
                <div className="container align-self-center p-4">

                    <div className="row">
                    <div className="d-flex justify-content-center pt-3">
                                <button className="btn btn-outline-dark btn-sm w-10" onClick={handleVer}>
                                    {listarEliminados ? "Ver usuarios Eliminados" : "Volver"}
                                </button>
                            </div>
                        <table className="table caption-top table-hover" id="users">
                            <caption className="text-center ">Lista de usuarios {listarEliminados ? "Autorizados" : "Eliminados"}</caption>
                            
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Correo</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody id="tableBody">

                                { 
                                listarEliminados ?
                                    listaUsuariosAutorizados.map((usuario, index) => {
                                        return (
                                            <tr key={usuario.id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{usuario.email}</td>
                                                <td>{usuario.rol}</td>
                                                <td>{usuario.estado}</td>
                                                <td>
                                                    {
                                                        <Link to={`/ModificarUsuario/${usuario.id}/${usuario.email}/${usuario.rol}/${usuario.estado}`}>
                                                            <button className="btn btn-outline-primary btn-sm"
                                                                title="Editar"
                                                            >
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
                                                        </Link>
                                                    }
                                                    {
                                                        <Link to={`/EliminarUsuario/${usuario.id}`}>
                                                            <button className="btn btn-outline-danger btn-sm" title="Eliminar"><FontAwesomeIcon icon={faTimes} /></button>
                                                        </Link>
                                                    }
                                                </td>
                                            </tr>)
                                    }) 
                                    :
                                    listaUsuariosEliminados.map((usuario, index) => {
                                        return (
                                            <tr key={usuario.id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{usuario.email}</td>
                                                <td>{usuario.rol}</td>
                                                <td>{usuario.estado}</td>
                                                <td>
                                                    {
                                                        <Link to={`/ModificarUsuario/${usuario.id}/${usuario.email}/${usuario.rol}/${usuario.estado}`}>
                                                            <button className="btn btn-outline-primary btn-sm"
                                                                title="Editar"
                                                            >
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
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

            </div>
        )
    } else {
        return (
            <Error403 />
        )
    }
}

export default Usuarios
