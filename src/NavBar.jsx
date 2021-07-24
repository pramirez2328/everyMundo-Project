import React from "react";
import everymundo from "./everymundo.png";

function NavBar() {
  return (
    <>
      <nav className="mt-3 navbar navbar-light bg-light d-flex border border-primary">
        <a className="navbar-brand ms-3" href="https://www.everymundo.com/">
          <img style={{ width: "270px" }} src={everymundo} alt="company logo" />
        </a>

        <h1 className="me-5" style={{ fontSize: "3.5rem" }}>
          Every
          <span style={{ color: "blue", fontFamily: "fantasy" }}>Mundo</span>
        </h1>
      </nav>
    </>
  );
}

export default NavBar;
