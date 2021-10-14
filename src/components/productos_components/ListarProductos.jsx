import React from 'react'

function ListarProductos() {
    return (
        <div>
            <div className="container align-self-center container-sm">

                <h1 className="mb-4 text-center">Productos</h1>

                <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Id producto, descripcion, estado "
                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-dark  btn-sm" type="button" id="button-addon2">Buscar</button>
                </div>

                <br />

                <button type="button" className="btn btn-outline-dark  btn-sm" data-bs-toggle="modal" data-bs-target="#modalRegistroProducto" user="Cerveza"
                    data-bs-whatever="$ 12.000">Registro producto</button>

                <br />

                <table className="table caption-top table-hover">

                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor Unitario</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Actualizar</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">

                    </tbody>
                </table>

            </div>

            {/* <!-- Button trigger modal 
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Launch static backdrop modal
</button>--> */}

            {/* <!-- Modal editar--> */}
            <div className="modal fade" id="modalEditar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Actualizar Producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="usuario-name" className="col-form-label">Valor Unitario:</label>
                                    <input type="text" className="form-control" id="usuario-name" />
                                </div>

                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Estado:</label>
                                    <select className="form-select" id="message-tex" aria-label="Default select example">
                                        <option selected disabled>Seleccione un estado</option>
                                        <option value="1">Disponible</option>
                                        <option value="2">No disponible</option>

                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-success">Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal registro producto--> */}
            <div className="modal fade" id="modalRegistroProducto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registro de Producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="formulario-registro-producto">

                                <div className="mb">
                                    <label for="descripcion" className="col-form-label">Descripción del Producto:</label>
                                    <input type="text" className="form-control" id="descripcion" />
                                </div>
                                <div className="mb-3">
                                    <label for="valor unit" className="col-form-label">Valor Unitario:</label>
                                    <input type="number" className="form-control" id="valor-unitario" />
                                </div>

                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Estado:</label>
                                    <select className="form-select" id="estadoProducto" aria-label="Default select example">
                                        <option selected disabled>Seleccione un estado</option>
                                        <option value="Disponible">Disponible</option>
                                        <option value="No disponible">No disponible</option>

                                    </select>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Confirmar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListarProductos
