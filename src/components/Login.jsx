import React, { useState } from 'react'
import "./css/login.css"
import { useHistory } from "react-router-dom"
import { consultarDatabase, crearUsuario, loginUsuario } from "../config/Firebase"
import { useInfo } from "../useInfo";
import Swal from "sweetalert2";



function Login(props) {

    const [correo, SetCorre] = useState("");
    const [contrasenna, SetContrassena] = useState("");
    const [crearUsu, setCrearUsu] = useState(false);
    const history = useHistory();
    const [correoUser, setCorreo] = useInfo("correo", "");
    const [id, setId] = useInfo("id", "");
    const [rol,setRol] = useInfo("rol", "");


    const handleGoogle = (event) => {
        event.preventDefault();
    }

    const handleRegistrar = (event) => {
        event.preventDefault();
        if (!correo.trim()) {

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
                icon: 'error',
                title: 'Campo usuario vacio, por favor digite un correo.'
            })
            return;

        } else if (!contrasenna.trim()) {

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
                icon: 'error',
                title: 'Campo contraseña vacio, por favor digite una contraseña'
            })
            return
        } else {
            setCrearUsu(false);
            crearUsuario(correo, contrasenna);
            SetCorre("");
            SetContrassena("");

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
                title: 'Registro exitoso'
            })
        }


    }

    const handleCrearUsu = (event) => {
        event.preventDefault();
        setCrearUsu(true);
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        const credenciales = await loginUsuario(correo, contrasenna);

        if (credenciales) {
            //console.log(credenciales.toJSON());
            //console.log(credenciales.email);
            setId(credenciales.uid);
            setCorreo(credenciales.email);

            const doc = await consultarDatabase("usuarios");
            const info = doc.filter((document) => (
                document.id === credenciales.uid
            ));
            //console.log(info[0].rol, info[0].estado);

            if (info[0].estado !== "Autorizado") {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Aun no esta autorizado su acceso.',
                    showConfirmButton: false,
                    timer: 1500
                })
                return
            } else {
                setRol(info[0].rol);
                props.func.setLog(true);
                history.replace("/");
            }


            //Solo queda guardarlos en local storage y limitar el renderizado del menu de acuerdo al rol
            //y permitir o no el login si esta autorizado o no.
            // alert("Logueado");
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
                title: 'Logueado'
            })

        } else {
            // alert("No se ha logueado");
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
                icon: 'error',
                title: 'No se ha podido completar el proceso, verifique el usuario o la contraseña'
            })
        }

        //console.log(credenciales.toJSON());
        //console.log("Entro a login");
        //console.log(history);
        //history.push('/Inicio');
    }

    const handleUsuario = (event) => {
        SetCorre(event.target.value);
    }

    const handleContrasenna = (event) => {
        SetContrassena(event.target.value);
    }

    return (
        <div className="log">
            <section className="form-login">
                <h1> {!crearUsu ? "Bienvenido al Login" : "Registrar usuario"}</h1>
                <form>
                    <input className="controls" type="email" validated="true" name="Usuario" value={correo} placeholder="Usuario" onChange={handleUsuario} />
                    <input className="controls from-control w-100 mb-2" value={contrasenna} type="password" name="Contraseña" placeholder="Contraseña" onChange={handleContrasenna} />
                    {!crearUsu ? <input className="btn btn-outline-primary w-100" type="submit" value="Ingresar" onClick={handleSubmit} /> :
                        <input className="btn btn-outline-primary w-100" type="submit" name="" value="Registrar" onClick={handleRegistrar} />}
                    {!crearUsu ? <p><button className="btn btn-outline" onClick={handleCrearUsu}>Clic para crear usuario</button></p>
                        : ""}
                    <div className="login-google">

                        {!crearUsu ? <button id="button-login" onClick={handleGoogle} className="btn btn-outline-success btn-sm">Autenticacion en Google</button> :
                            ""}
                    </div>
                </form>
            </section>
        </div>


    )
}

export default Login