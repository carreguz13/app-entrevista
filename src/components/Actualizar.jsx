import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../App.css";

function Actualizar() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <h1 className="display-3 text-center my-5">Actualizar Contacto</h1>
          <div className="col-md-6 shadow mx-auto p-5">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="date"
                  placeholder="Fecha de nacimiento"
                  onfocus="(this.type='date')"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="number"
                  placeholder="Teléfono"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="submit"
                  value="Actualizar contacto"
                  className="btn btn-dark"
                />
                <Link to="/" className="btn btn-danger ">
                  Cancelar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actualizar;
