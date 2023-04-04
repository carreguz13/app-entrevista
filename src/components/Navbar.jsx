import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 ml-5">
      <Link to="/" className="navbar-brand ">
        Aplicación Agenda de Contactos React
      </Link>
    </nav>
  );
}

export default Navbar;
