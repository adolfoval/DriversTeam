import React from 'react'

function Ventas() {
    return (
        <div>
            <div className="container align-self-center">

                <h1 className="mb-4 text-center">Formulario de ventas</h1>

                <input type="text" placeholder="Nombre de cliente" className="form-control w-25 mb-3" />
                {/* <h5>C.C <input type="radio" name="id" className="form-check-input d-inline" /></h5> */}
                {/* <!-- <h5>T.I <input type="radio" name="id"></h5> --> */}
                {/* <h5>Passport <input type="radio" name="Id" className="form-check-input d-inline" /></h5> */}
                <div className="form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label className ="form-check-label" for="inlineRadio1">CC</label>
                </div>
                <div className="form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label className ="form-check-label" for="inlineRadio2">Passport</label>
                </div>

                <input type="text" placeholder="id" className="form-control w-25 mb-3" />

                <table className="table caption-top table-hover">

                    <thead>
                        <tr>
                            <th>Idenntificador</th>
                            <th>Descripcion</th>
                            <th>Valor/unit</th>
                            <th>Estado</th>
                            <th>Cantidad a agregar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Hamburguesa</th>
                            <th>500 gr de carne <br /> con papas y gaseosa</th>
                            <th>20.000</th>
                            <th> Disponible </th>
                            <th>
                                <input type="number" name="cantidad" className="form-control form-control-sm w-25"/>
                            </th>
                        </tr>
                        <tr>
                            <th>Cerveza</th>
                            <th>Jarra de 2 litros</th>
                            <th>30.000</th>
                            <th> Disponible </th>
                            <th>
                                <input type="number" name="cantidad" className="form-control form-control-sm w-25"/>
                            </th>
                        </tr>
                    </tbody>
                </table>

                <div className="d-grid gap-2 col-6 mx-auto">
                    
                    <a className="btn btn-outline-dark  d-inline btn-sm" href="ventas.html">
                        Confirmar
                    </a>
                    
                    <a className="btn btn-outline-dark  pe-3 d-inline btn-sm" href="ventas.html">
                        Cancelar
                    </a>

                    
                </div>
            </div>
        </div>
    )
}

export default Ventas
