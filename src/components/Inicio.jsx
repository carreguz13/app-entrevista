import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-right">
            <Link to="/agregar" className="btn btn-outline-dark">
              Añadir contacto a la lista
            </Link>
          </div>
          <div className="col-md-6 mx-auto">
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
