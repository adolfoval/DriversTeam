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
    
    const handleInputChange= (event) =>{

        let item = event.target.name.split(".",3)
        
        let prefijo = parseInt(item[1])
        let attributo=item[2]

         if (item [0] === "productos"){
            console.log("item",item);

            setVenta({
                ...venta,
                productos: [...venta.productos.slice(0,prefijo),  
                    {...venta.productos[prefijo],[attributo]: event.target.value},  
                    ...venta.productos.slice(prefijo+1,venta.productos.length)
                ]

            })
        }else{ 
            setVenta({
                ...venta,
                [event.target.name] : event.target.value
            })
        }



    }
    const handleAdd = (event) =>{
        setVenta({
            ...venta,
            productos: [...venta.productos,
            {
                producto: "",
                precioUnitario: "", cantidad: ""
            }
            ]
        })
    }
    function handleDelete (idDelete) {
        let removed =venta.productos.splice(idDelete,1)
        console.log("handleDelete", idDelete);
        console.log("venta.productos",venta.productos);
        setVenta({
            ...venta
        })
    }

    const saveDB = () =>{
        console.log(venta);
    }

    const cargarDatos = async () => {
        const ventaTemporal = await consultarDocumentoDatabase('ventas',idVenta.id)
        setVenta(ventaTemporal)
        
    }


    return (
        <div>
            
            <div className="container align-self-center">


                <div class="container d-flex justify-content-between">
                    <button class="btn btn-primary "  type="button">Regresar</button>
                    <button class="btn btn-success "  type="button" onClick={saveDB}>Guardar</button>
                </div>

                <h1 className="mb-4 text-center">Descripción Venta</h1>
                <div className="container">

                    
                    
                    
                    

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">ID Venta</span>
                        </div>
                        <input type="text" class="form-control" value={venta.id} disabled/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Cliente</span>
                        </div>
                        <input type="text" class="form-control" defaultValue={venta.nombreCliente} onChange={handleInputChange} name ="nombreCliente"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">ID Cliente</span>
                        </div>
                        <input type="text" class="form-control" defaultValue={venta.idCliente} onChange={handleInputChange} name="idCliente"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Estado</span>
                        </div>
                        <input type="text" class="form-control" defaultValue={venta.estado} onChange={handleInputChange} name="estado"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Fecha</span>
                        </div>
                        <input type="datetime-local" class="form-control" defaultValue={venta.fecha ? (new Date(venta.fecha.seconds *1000).toISOString().slice(0,16))  :""} onChange={handleInputChange} name="fecha"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Vendedor</span>
                        </div>
                        <input type="text" class="form-control" defaultValue={venta.vendedor} onChange={handleInputChange} name="vendedor"/>
                    </div>


                </div>
                <br/>
                <button class="btn btn-success" type="button" onClick={handleAdd}>Agregar producto</button>
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
                                            <td><input type="text" class="form-control" defaultValue={product.producto} onChange={handleInputChange} name=  {`productos.${index2}.producto`}/></td>
                                            <td><input type="text" class="form-control" defaultValue={product.precioUnitario} onChange={handleInputChange} name=  {`productos.${index2}.precioUnitario`}/></td>
                                            <td><input type="text" class="form-control" defaultValue={product.cantidad} onChange={handleInputChange} name=  {`productos.${index2}.cantidad`}/></td>
                                            <td> <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(index2)}><FontAwesomeIcon icon={faTimes}/></button> </td>
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
