import React from "react";
import americanAirlines from "../images/American.jpg";
import unitedAirlines from "../images/United.jpg";
import emirates from "../images/Emirates-Symbol.png";

//3 cards to display result
function Show() {
  return (
    <div className="d-flex justify-content-between text-center mb-3">
      <div className="card mt-3" style={{ width: "33%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={americanAirlines}
              className="img-fluid rounded-start ms-3"
              alt="airline logo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Mexico</h5>
              <p className="card-text">
                Miami - Mexico <br /> American Airlines
              </p>
              <p className="card-text">
                <strong>
                  <span
                    className="currencyFormat"
                    style={{ color: "blue", fontSize: "1.3rem" }}
                  >
                    $1234.56
                  </span>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-3" style={{ width: "33%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={unitedAirlines}
              className="img-fluid rounded-start ms-5 mt-4"
              alt="airline logo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h5 className="card-title">Chicago</h5>
              <p className="card-text">
                Miami - Chicago <br /> United Airlines
              </p>
              <p className="card-text">
                <strong>
                  <span
                    className="currencyFormat"
                    style={{ color: "blue", fontSize: "1.3rem" }}
                  >
                    $1234.56
                  </span>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-3" style={{ maxWidth: "33%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={emirates}
              className="img-fluid rounded-start ms-5 mt-3"
              alt="airline logo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h5 className="card-title">Barcelona</h5>
              <p className="card-text ">
                Miami - Barcelona <br />
                Emirates
              </p>

              <p className="card-text">
                <strong>
                  <span
                    className="currencyFormat"
                    style={{ color: "blue", fontSize: "1.3rem" }}
                  >
                    $1234.56
                  </span>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
