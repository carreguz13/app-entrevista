import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Inicio() {
  const contactos = useSelector((state) => state);

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
          <div className="col-md-15 mx-auto">
            <table className="table table-hover">
              <thead className="text-white bg-dark text-center">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Fecha de nacimiento</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {contactos.map((contacto, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contacto.Nombre}</td>
                    <td>{contacto.Nacimiento}</td>
                    <td>{contacto.Telefono}</td>
                    <td>{contacto.Correo}</td>

                    <td>
                      <Link
                        to={`/editar/${contacto.id}`}
                        className="btn btn-small btn-primary mr-2"
                      >
                        Actualizar
                      </Link>
                      <button
                        type="button"
                        className="btn btn-small btn-danger"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
