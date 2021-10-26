import React from 'react'
import { Redirect } from "react-router-dom";
import { useParams } from "react-router";
import { eliminarDocumentoDatabase } from '../../config/Firebase'
import Swal from 'sweetalert2';


function ListarVentasEliminar() {

    let {id} = useParams();


    const deleteVenta = async () => {
        await eliminarDocumentoDatabase('ventas',id)
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
            title: 'Venta eliminado'
        })
    }
    deleteVenta();

    return (
        <Redirect to="/ListarVentas" />
    )
}

export default ListarVentasEliminar
