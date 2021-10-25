import React from 'react';
import { actualizarDocumentoDatabase } from "../../config/Firebase";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import Swal from 'sweetalert2';

function EliminarUsuario() {

    const user = useParams();
    const deleteUser = async () => {
        const data = {
            rol: "Ninguno",
            estado: "No autorizado"
        }
        await actualizarDocumentoDatabase("usuarios", user.id, data);

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
            title: 'Usuario eliminado'
        })
    }
    deleteUser();



    return (
        <Redirect to="/ListarUsuarios" />
    )
}

export default EliminarUsuario
