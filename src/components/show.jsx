import React from "react";
import americanAirlines from "../images/American.jpg";
import unitedAirlines from "../images/United.jpg";
import lufthansa from "../images/lufthansa.png";
import emirates from "../images/Emirates-Symbol.png";

function Show() {
  return (
    <div className=" mb-3">
      <div className="d-flex justify-content-between text-center">
        <div className="card mt-3" style={{ width: "635px" }}>
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
                  Miami - Mexico <br /> American Airlines <br />
                  5:40pm - 7:55pm
                </p>
                <p className="card-text">
                  <strong>$3445,34.00</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-3" style={{ width: "635px" }}>
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
                  <br />
                  2:23pm - 4:40pm
                </p>
                <p className="card-text">
                  <strong>$3445,34.00</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="card mt-3" style={{ maxWidth: "635px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={lufthansa}
                className="img-fluid rounded-start ms-5"
                alt="airline logo"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">London</h5>
                <p className="card-text">
                  Miami - London <br /> Lufthansa <br />
                  1:23am - 4:00pm
                </p>
                <p className="card-text">
                  <strong>$3445,34.00</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-3" style={{ maxWidth: "635px" }}>
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
                  <br />
                  5:23am - 3:00pm
                </p>

                <p className="card-text">
                  <strong>$3445,34.00</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
