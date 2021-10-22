import React, { useEffect, useState } from 'react'
import { useParams,Link } from "react-router-dom";
import { consultarDocumentoDatabase } from '../../config/Firebase'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTimes } from "@fortawesome/free-solid-svg-icons";



function VerVenta() {
    let idVenta = useParams();
    const [venta, setVenta] = useState([])
  
    
    useEffect(() => {
        cargarDatos()
    }, [])

    const cargarDatos = async () => {
        const ventaTemporal = await consultarDocumentoDatabase('ventas',idVenta.id)
        setVenta(ventaTemporal)
        
    }

    return (
        <div>
            <div className="container align-self-center">

                <h1 className="mb-4 text-center">Descripción Venta</h1>
                <div className="container">
                    <h6>ID Venta: {venta.id}</h6>
                    <h6>Cliente: {venta.nombreCliente}</h6>
                    <h6>ID Cliente: {venta.idCliente}</h6>
                    <h6>Estado: {venta.estado}</h6>
                    <h6>Fecha: {venta.fecha ? (new Date(venta.fecha.seconds *1000).toLocaleString())  :""}</h6>
                    <h6>Vendedor: {venta.vendedor}</h6>
                    
                </div>
                <br/>
                <table className="table caption-top table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Precio Unitario</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Acción</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                    {   venta.productos ? venta.productos.map((product, index2) => {
                                    
                                    return (
                                        <tr key={product.id}>
                                            <th scope="row">{index2 + 1}</th>
                                            <td>{product.producto}  </td>
                                            <td>{product.precioUnitario}  </td>
                                            <td>{product.cantidad}  </td>
                                            <td>
                                            {                               
                                                <Link to={`/Venta/${idVenta.id}/editar/${index2}`}>
                                                    <button className="btn btn-outline-primary btn-sm" title="Editar"><FontAwesomeIcon icon={faPenSquare}/></button>
                                                </Link>
                                            }
                                            {                               
                                                <Link to={`/Venta/${idVenta.id}/delete/${index2}`}>
                                                    <button className="btn btn-outline-danger btn-sm" title="Eliminar"><FontAwesomeIcon icon={faTimes}/></button>
                                                </Link>
                                            }
                                            </td>
                                        </tr> 
                                    )
                                    
                                    })
                                :  (<h6>Sin productos</h6>)                  
                    
                    }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default VerVenta
