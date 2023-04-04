import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";

function Agregar() {
  const [nombre, setnombre] = useState("");
  const [fecha, setfecha] = useState("");
  const [numero, setnumero] = useState("");
  const [email, setemail] = useState("");

  const contactos = useSelector((state) => state);
  console.log(contactos);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checarEmail = contactos.find(
      (contacto) => contacto.Correo === email && email
    );

    const checarNumero = contactos.find(
      (telefono) => telefono.Telefono === parseInt(numero)
    );

    if (checarNumero) {
      return toast.error("Este número ya existe!");
    }

    if (checarEmail) {
      return toast.error("Este email ya existe!");
    }

    if (!nombre || !fecha || !numero || !email) {
      return toast.warning("Porfavor llenar todos los campos!");
    }
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
                  value={nombre}
                  onChange={(e) => {
                    setnombre(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="date"
                  placeholder="Fecha de nacimiento"
                  className="form-control"
                  value={fecha}
                  onChange={(e) => {
                    setfecha(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="number"
                  placeholder="Teléfono"
                  className="form-control"
                  value={numero}
                  onChange={(e) => {
                    setnumero(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
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
