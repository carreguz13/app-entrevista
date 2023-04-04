import React from "react";
import Navbar from "./Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Actualizar() {
  const [Nombre, setNombre] = useState("");
  const [Nacimiento, setNacimiento] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Correo, setCorreo] = useState("");

  const { id } = useParams();

  const contactos = useSelector((state) => state);
  const enviar = useDispatch();
  const historial = useNavigate();
  const contactoActual = contactos.find(
    (contacto) => contacto.id === parseInt(id)
  );

  useEffect(() => {
    if (contactoActual) {
      setNombre(contactoActual.Nombre);
      setNacimiento(contactoActual.Nacimiento);
      setTelefono(contactoActual.Telefono);
      setCorreo(contactoActual.Correo);
    }
  }, [contactoActual]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checarEmail = contactos.find(
      (contacto) => contacto.id !== parseInt(id) && contacto.Correo === Correo
    );

    const checarNumero = contactos.find(
      (telefono) =>
        telefono.id !== parseInt(id) && telefono.Telefono === parseInt(Telefono)
    );

    if (checarNumero) {
      return toast.error("Este número ya existe!");
    }

    if (checarEmail) {
      return toast.error("Este email ya existe!");
    }

    if (!Nombre || !Nacimiento || !Telefono || !Correo) {
      return toast.warning("Porfavor llenar todos los campos!");
    }

    const data = {
      Nombre,
      Nacimiento,
      Telefono,
      Correo,
      id: parseInt(id),
    };

    enviar({ type: "ACTUALIZAR_CONTACTO", payload: data });
    toast.success("El contacto fue actualizado!");
    historial("/");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        {contactoActual ? (
          <div className="row">
            <h1 className="display-3 text-center my-5">Actualizar Contacto</h1>
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="form-control"
                    value={Nombre}
                    onChange={(e) => {
                      setNombre(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="date"
                    placeholder="Fecha de nacimiento"
                    className="form-control"
                    value={Nacimiento}
                    onChange={(e) => {
                      setNacimiento(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="number"
                    placeholder="Teléfono"
                    className="form-control"
                    value={Telefono}
                    onChange={(e) => {
                      setTelefono(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="form-control"
                    value={Correo}
                    onChange={(e) => {
                      setCorreo(e.target.value);
                    }}
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
        ) : (
          <h1 className="display-3 my-5 text-center">Contacto no existente</h1>
        )}
      </div>
    </div>
  );
}

export default Actualizar;
