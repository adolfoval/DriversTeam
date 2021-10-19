import React from 'react';
import "./css/Inicio.css"
import {Link} from "react-router-dom";

function Inicio() {
    return (
        <div>
           <section className="hero-banner bg-light py-5">
            <div className="container">
                <div className="row row align-items-center">
                    <div className="col-lg-5 offset-lg-1 order-lg-1">
                        <img src="https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_960_720.jpg" className="img-fluid" alt="Web Development"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mt-3">Driver's Pub</h1>
                        <p className="lead text-secondary my-5">Bienvenido al mejor lugar de la ciudad para pasar el mejor rato con sus amigos</p>
                        {/* <Link to="/Login" className="btn btn-outline-secondary btn-lg border">Login</Link> */}
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Inicio
