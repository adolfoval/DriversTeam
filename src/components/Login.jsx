import React from 'react'
import "./css/login.css"
import { getAuth } from '@firebase/auth';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";


function Login() {
    let usuarioActual;
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    async function login(){
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div className="log">
            <section className="form-login">
                <h1>Bienvenido al Login</h1>

                <input className="controls" type="text" name="Usuario" value="" placeholder="Usuario" />
                <input className="controls from-control w-100 mb-2" type="password" name="Contraseña" value="" placeholder="Contraseña" />
                <input className="btn btn-outline-primary w-100" type="submit" name="" value="Ingresar" />
                <p><a href="/">Clic para crear usuario</a></p>
                <div className="login-google">
                    <button id="button-login" className ="btn btn-outline-success btn-sm" onClick={login}>Autenticacion en Google</button>
                </div>

            </section>
        </div>
    )
}

export default Login
