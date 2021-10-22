import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { consultarDatabase } from '../../config/Firebase'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTimes } from "@fortawesome/free-solid-svg-icons";


function ListarVentas() {

    const [listaVentas, setListaVentas] = useState([])
    useEffect(() => {
        cargarDatos()
    }, [])

    const cargarDatos = async () => {
        const listaTemporal = await consultarDatabase('ventas')
        setListaVentas(listaTemporal)
        
    }

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
                            <th scope="col">Valor venta</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Id cliente</th>
                            <th scope="col">Vendedor</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                    {

                        listaVentas.map((venta, index) => {
                            return (
                            <tr key={venta.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{venta.estado}  </td>
                                <td>{venta.fecha ? (new Date(venta.fecha.seconds *1000).toLocaleString())  :""}</td>
                                <td>
                                    
                                {
                                <Link to={`/Venta/${venta.id}`}>
                                    Detalle venta
                                </Link>
                                }
                                    
                                </td>
                                <td>{venta.precioVenta}</td>
                                <td>{venta.nombreCliente}</td>
                                <td>{venta.idCliente}</td>
                                <td>{venta.vendedor}</td>
                                <td>
                                {                               
                                    <Link to={`/ListarVentas/${venta.id}`}>
                                        <button className="btn btn-outline-primary btn-sm" title="Editar"><FontAwesomeIcon icon={faPenSquare}/></button>
                                    </Link>
                                }
                                {                               
                                    <Link to={`/ListarVentas/delete/${venta.id}`}>
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
    )
}

export default ListarVentas
