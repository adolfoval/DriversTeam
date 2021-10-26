import React from 'react'
import { eliminarDocumentoDatabase } from '../../config/Firebase'
import { useParams, Redirect } from "react-router-dom";
import Swal from 'sweetalert2'

function EliminarProductos() {
    const id = useParams();
    
    const eliminarProducto = async () => {
      await eliminarDocumentoDatabase ("productos", id.id)
      // console.log(eliminarProducto);
  
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
          title: 'Producto eliminado'
        }) 
    }

    eliminarProducto();

      return (       
          <Redirect to="/ListarProductos" />
    )
}

export default EliminarProductos