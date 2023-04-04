import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Agregar() {
  const [Nombre, setNombre] = useState("");
  const [Nacimiento, setNacimiento] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Correo, setCorreo] = useState("");

  const contactos = useSelector((state) => state);
  const enviar = useDispatch();

  const historial = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checarEmail = contactos.find(
      (contacto) => contacto.Correo === Correo && contacto
    );

    const checarNumero = contactos.find(
      (telefono) => telefono.Telefono === parseInt(Telefono)
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
      id: (contactos[contactos.length - 1]?.id || 0) + 1,
    };

    enviar({ type: "AÑADIR_CONTACTO", payload: data });
    toast.success("El contacto fue añadido a la lista!");
    historial("/");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <h1 className="display-3 text-center my-5">Añadir Contacto </h1>
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
                  value="Agregar contacto"
                  className="btn btn-block btn-dark"
                  onSubmit={handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agregar;
