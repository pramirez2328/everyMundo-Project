import React from "react";
import everymundo from "../images/everymundo.png";

function NavBar() {
  return (
    <>
      <nav className="mt-3 navbar navbar-light bg-light d-flex border border-primary">
        <a className="navbar-brand ms-3" href="https://www.everymundo.com/">
          <img style={{ width: "170px" }} src={everymundo} alt="company logo" />
        </a>

        <h1
          className="text-center mt-3 me-5"
          style={{ fontFamily: "Times-new-roman" }}
        >
          EVERY
          <span style={{ color: "blue", fontFamily: "fantasy" }}>
            MUNDO
          </span>{" "}
          CURRENCY FORMAT
        </h1>
      </nav>
    </>
  );
}

export default NavBar;
