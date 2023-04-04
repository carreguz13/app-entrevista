import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <Link to="/" className="navbar-brand ml-5">
        Aplicación React
      </Link>
    </nav>
  );
}

export default Navbar;
