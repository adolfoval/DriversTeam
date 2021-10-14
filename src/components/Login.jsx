import React from 'react'
import "./css/login.css"

function Login() {
    return (
        <div className="log">
            <section className="form-login">
                <h1>Bienvenido al Login</h1>

                <input className="controls" type="text" name="Usuario" value="" placeholder="Usuario" />
                <input className="controls from-control w-100 mb-2" type="password" name="Contraseña" value="" placeholder="Contraseña" />
                <input className="btn btn-outline-primary w-100" type="submit" name="" value="Ingresar" />
                <p><a href="/">Clic para crear usuario</a></p>
                <div className="login-google">
                    <button id="button-login" className ="btn btn-outline-success btn-sm">Autenticacion en Google</button>
                </div>

            </section>
        </div>
    )
}

export default Login
