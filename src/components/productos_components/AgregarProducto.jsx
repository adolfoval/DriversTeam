import React, {useState} from 'react'
import { guardarDatabase } from '../../config/Firebase'

export const AgregarProducto = () => {

    const [descripcion, setDescripcion] = useState('')
    const [estado, setEstado] = useState('')
    const [valorUnitario, setValorUnitario] = useState('')

    const handleGuardarProducto = async (e) => {
        e.preventDefault()

        const producto = {
            descripcion,
            estado,
            valorUnitario
        }

        await guardarDatabase('productos', producto)

        setDescripcion('')
        setValorUnitario('')
    }

    return (
        <div className="modal fade" id="modalRegistroProducto" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Agregar Producto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
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
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="submit" className="btn btn-success" data-bs-dismiss="modal" onClick={handleGuardarProducto}>Confirmar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
