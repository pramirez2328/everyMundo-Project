import React from "react";
import everymundo from "../images/everymundo.png";
import DownloadButton from "../components/downloadButton";
import { worldCountries } from "../utilities/arrayOfCountries";
const Papa = require("papaparse");

function download_csv() {
  const myJSON = JSON.stringify(worldCountries);
  let csvFile = Papa.unparse(myJSON);
  const blob = new Blob([csvFile]);
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob, { type: "text/plain" });
  a.download = "CSV Export File";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// If the user clicks in the image, it redirects to everymundo website
// button to download files as a csv file
function NavBar() {
  return (
    <>
      <nav className="mt-3 navbar navbar-light bg-light d-flex border border-primary pe-5">
        <a className="navbar-brand ms-3" href="https://www.everymundo.com/">
          <img style={{ width: "170px" }} src={everymundo} alt="company logo" />
        </a>

        <h3
          className="text-center mt-3"
          style={{ fontFamily: "Times-new-roman" }}
        >
          EVERY
          <span style={{ color: "blue", fontFamily: "fantasy" }}>
            MUNDO
          </span>{" "}
          CURRENCY FORMAT
        </h3>
        <DownloadButton download={download_csv} />
      </nav>
    </>
  );
}

export default NavBar;
