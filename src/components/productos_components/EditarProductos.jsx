import React, { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { actualizarDocumentoDatabase, consultarDocumentoDatabase, guardarDatabase } from '../../config/Firebase'
import Swal from 'sweetalert2'

export const EditarProductos = () => {

    const {id} = useParams()

    console.log(id)

    const [descripcion, setDescripcion] = useState('')
    const [estado, setEstado] = useState('')
    const [valorUnitario, setValorUnitario] = useState('')
    const history = useHistory()

    const ConsultarProducto = async (idProducto) =>{
        const productoTemp = await consultarDocumentoDatabase('productos', idProducto)
        setDescripcion(productoTemp.descripcion)
        setEstado(productoTemp.estado)
        setValorUnitario(productoTemp.valorUnitario)
    }

    useEffect(() => {
        if(id !== 'agregar'){

            ConsultarProducto(id)
        }

        setDescripcion('')
        setEstado('')
        setValorUnitario('')

    }, [id])

    const handleActualizarProducto = async (e) =>{
        e.preventDefault()

        const producto = {
            descripcion,
            estado,
            valorUnitario
        }

        await actualizarDocumentoDatabase('productos', id, producto)

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Producto actualizado'
        })

        history.push('/ListarProductos')
    }

    const handleAgregarProducto = async (e) => {
        e.preventDefault()

        const producto = {
            descripcion,
            estado,
            valorUnitario
        }

        await guardarDatabase('productos', producto)

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Producto agregado'
        })

        history.push('/ListarProductos')
    }

    return (
        <div>
            <div className="container align-self-center">

                <br />

                <h1 className="mb-4 text-center">{id === 'agregar' ? 'Agregar' : 'Actualizar'} Producto</h1>
                <form id="formulario-registro-producto">

                    <div className="mb">
                        <label className="col-form-label">Descripción del Producto:</label>
                        <input type="text" className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Valor Unitario:</label>
                        <input type="number" className="form-control" value={valorUnitario} onChange={(e) => setValorUnitario(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="col-form-label">Estado:</label>
                        <select className="form-select" aria-label="Default select example" onChange={(e) => setEstado(e.target.value)}>

                            <option>Seleccione un estado</option>
                            <option value="Disponible">Disponible</option>
                            <option value="No disponible">No disponible</option>

                        </select>
                    </div>

                    <div className="modal-footer">
                        <Link to="/ListarProductos" type="button" className="btn btn-secondary" >Cancelar</Link>
                        <button type="submit" className="btn btn-success" onClick={id === 'agregar' ? handleAgregarProducto : handleActualizarProducto}>
                           {id === 'agregar' ? 'Agregar' : 'Actualizar'} producto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}