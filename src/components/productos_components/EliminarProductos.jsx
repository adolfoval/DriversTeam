import React from 'react'
import { eliminarDocumentoDatabase } from '../../config/Firebase'
import { useParams, Redirect } from "react-router-dom";
import Swal from 'sweetalert2'

function EliminarProductos() {
    let id = useParams();
    
    const eliminar = await eliminarDocumentoDatabase ("productos",id.id)
    console.log(eliminar);


    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
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
        title: eliminar
      }) 

      
      
      return (
          /* eliminarDocumentoDatabase()  */       
          <Redirect to="/ListarProductos" />
    )
}

export default EliminarProductos
