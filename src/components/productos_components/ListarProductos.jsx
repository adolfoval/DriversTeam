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
    const [tablaProductos, setTablaProductos]= useState([]);
    const [busqueda, setBusqueda]= useState("");

    const cargarDatos = async () => {
        const listaTemporal = await consultarDatabase('productos')
        setListaProductos(listaTemporal)
        setTablaProductos(listaTemporal)

    }

    useEffect(() => {
        cargarDatos()
    }, [])
    
    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
      }
      
      const filtrar=(terminoBusqueda)=>{
        let resultadosBusqueda=tablaProductos.filter((elemento)=>{
          if(elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          || elemento.descripcion.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          || elemento.estado.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          ){
            return elemento;
          }
        });
        setListaProductos(resultadosBusqueda);
      } 
          
    return (
        <div>
            <div className="container align-self-center">

                <br />

                <h1 className="mb-4 text-center">Productos</h1>

                 <div className="input-group mb-3">
                    <input  
                    className="form-control inputBuscar"
                    value= {busqueda}
                    placeholder="Búsqueda por:   Id, Descripción o Estado "
                    onChange= {handleChange}
                    />
                    
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
                                        <td>{producto.valorUnitario}</td>
                                        <td>{producto.estado}</td>
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
