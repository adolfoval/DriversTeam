import React, { useEffect, useState } from 'react'
import { useParams,Link } from "react-router-dom";
import { consultarDocumentoDatabase,eliminarDocumentoDatabase } from '../../config/Firebase'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTimes } from "@fortawesome/free-solid-svg-icons";



function ListarVentasEliminar() {

    let {id} = useParams();
    console.log(id);

    const [venta, setVenta] = useState([])
  
    
    useEffect(() => {
        try{
            cargarDatos()
        }catch{

        }
        
    }, [])

    const cargarDatos = async () => {
        const ventaTemporal = await consultarDocumentoDatabase('ventas',id)
        setVenta(ventaTemporal)
        await eliminarDocumentoDatabase('ventas',id).then(()=>{
            console.log("elimino correctamente");
        }).catch((e)=>{
            console.log(e)
        })
        
    }

    return (
        <></>
    )
}

export default ListarVentasEliminar
