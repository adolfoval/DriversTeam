import React, { useEffect, useState } from 'react'
import { useParams,Link } from "react-router-dom";
import { consultarDocumentoDatabase } from '../../config/Firebase'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTimes } from "@fortawesome/free-solid-svg-icons";



function VerVentaEliminarItem() {

    let {id,item} = useParams();
    console.log(id);
    console.log(item);
    return (
        <></>
    )
}

export default VerVentaEliminarItem
