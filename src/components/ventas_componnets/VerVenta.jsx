import React, { useEffect, useState } from 'react'
import { useParams,Link,Redirect } from "react-router-dom";
import { consultarDocumentoDatabase,consultarDatabase,actualizarDocumentoDatabase,guardarDatabase } from '../../config/Firebase'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';


function VerVenta() {
    let idVenta = useParams();
    const [venta, setVenta] = useState([])
    const [productosDB, setProductosDB] = useState([])
    
    useEffect(() => {
        cargarDatos()
    }, [])

    const handleSelectChange = (event, arg) =>{ 
        let prefijo = arg
        let attributo="precioUnitario"
        let valorUnitario = productosDB.find(o => o.descripcion === event.target.value).valorUnitario
        setVenta({
            ...venta,
            productos: [...venta.productos.slice(0,prefijo),  
                {...venta.productos[prefijo],[attributo]: valorUnitario, producto:event.target.value},  
                ...venta.productos.slice(prefijo+1,venta.productos.length)
            ]
        })
    }

    const handleSelect2Change = (event) =>{ 
        setVenta({
            ...venta,
            estado: event.target.value
        })
    }
    const handleInputChange= (event) =>{

        let item = event.target.name.split(".",3)
        let prefijo = parseInt(item[1])
        let attributo=item[2]

         if (item [0] === "productos"){

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
        if(venta.productos){
            setVenta({
                ...venta,
                productos: [...venta.productos,
                {
                    producto: "",
                    precioUnitario: "", cantidad: ""
                }
                ]
            })
        }else{
            setVenta({
                ...venta,
                productos: [
                {
                    producto: "",
                    precioUnitario: "", cantidad: ""
                }
                ]
            })
        }
    }
    function handleDelete (idDelete) {
        venta.productos.splice(idDelete,1)
        setVenta({
            ...venta,
            productos: [...venta.productos]
        })
    }

    const saveDB = () =>{
        const ventaTotal = async () => {

            await calculoValorTotal()
            
            if(idVenta.id){
                    await actualizarDocumentoDatabase("ventas", idVenta.id, venta) 
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'Venta guardada'
                    })


            }else{
                    await guardarDatabase("ventas",venta)
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'Venta guardada'
                    })
               
 
            }
        }
        ventaTotal()
    }      

    const cargarDatos = async () => {

        if(idVenta.id){
            const ventaTemporal = await consultarDocumentoDatabase('ventas',idVenta.id)
            setVenta(ventaTemporal)
        }else{
            idVenta.id = null
            setVenta({
                ...venta,
                productos: [
                {
                    producto: "",
                    precioUnitario: "", cantidad: ""
                }
                ]
            })
        }

        const listaProductos = await consultarDatabase('productos')
        setProductosDB(listaProductos)
    }
    
    const handleInputChange2= (event) =>{
        const date = new Date(event.target.value).getTime() / 1000
        setVenta({ 
            ...venta,
            fecha:{
                seconds: date,
                nanoseconds:0
            }
        })
    }



    function calculoValorTotal() {
        return new Promise((resolve, reject) => {
            let costo=0
            let acumulador=0
    
           venta.productos ? venta.productos.map((product, index2) => {
                acumulador = acumulador + (parseInt(product.cantidad) * parseInt(product.precioUnitario))
            })
            :  acumulador=0
    
            costo = acumulador
            venta.precioVenta = costo
            setVenta({ 
                ...venta,
                precioVenta:costo
            })
            resolve()
        });
      }



    return (
        <div>
            
            <div className="container align-self-center">


                <div class="container d-flex justify-content-between">
                    <Link to={`/ListarVentas`}>
                        <button className="btn btn btn-dark" title="Regresar"><FontAwesomeIcon icon={faTimes}/></button>
                    </Link>
                    <button class="btn btn-success" type="button" onClick={saveDB}>Guardar</button>
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
                            <span class="input-group-text" id="basic-addon1" >Cliente</span>
                        </div>
                        <input type="text" class="form-control" defaultValue={venta.nombreCliente} onChange={handleInputChange} name ="nombreCliente" required/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1" >ID Cliente</span>
                        </div>
                        <input type="text" class="form-control" defaultValue={venta.idCliente} onChange={handleInputChange} name="idCliente" required/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Estado</span>
                        </div>
                        {/* <input type="text" class="form-control" defaultValue={venta.estado} onChange={handleInputChange} name="estado"/> */}
                            <select class="form-control" onChange={ (event) => handleSelect2Change(event)} required>
                                <option disabled selected value> -- select an option -- </option>
                                <option>En proceso</option>
                                <option>Cancelada</option>
                                <option>Entregada</option>
                            </select>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Fecha</span>
                        </div>
                        <input type="datetime-local" class="form-control" defaultValue={venta.fecha ? (new Date(venta.fecha.seconds *1000).toISOString().slice(0,16))  :""} onChange={handleInputChange2} name="fecha"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Vendedor</span>
                        </div>
                        <input type="text" class="form-control" defaultValue={venta.vendedor} onChange={handleInputChange} name="vendedor"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Valor de Venta</span>
                        </div>
                        <input type="text" class="form-control" defaultValue={venta.precioVenta} name="precioVenta" disabled/>
                    </div>


                </div>
                <br/>
                <button class="btn btn-dark" type="button" onClick={handleAdd}>Agregar producto</button>
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
                                            {
                                                product.producto 
                                                ? <td><input type="text" class="form-control" defaultValue={product.producto} onChange={handleInputChange} name=  {`productos.${index2}.producto`}readonly="readonly"/></td>
                                                : 
                                                    <td>
                                                        <select class="form-control" onChange={ (event) => handleSelectChange(event,index2)}>
                                                            <option disabled selected value> -- select an option -- </option>
                                                            {
                                                                productosDB.map((prod,index3) => {
                                                                    return(
                                                                        <option>{prod.descripcion}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </td>
                                                
                                            }

                                            <td><input type="text" class="form-control" defaultValue={product.precioUnitario} onChange={handleInputChange} name=  {`productos.${index2}.precioUnitario`} readonly="readonly"/></td>
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
