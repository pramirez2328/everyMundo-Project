import React from "react";
import americanAirlines from "../images/American.jpg";
import unitedAirlines from "../images/united-airlines.png";
import lufthansa from "../images/lufthansa.png";
import emirates from "../images/emirates.png";

function Show() {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between">
        <div className="card my-3" style={{ width: "635px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={americanAirlines}
                className="img-fluid rounded-start"
                alt="airline logo"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card my-3" style={{ width: "635px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={unitedAirlines}
                className="img-fluid rounded-start"
                alt="airline logo"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="card my-3" style={{ maxWidth: "635px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={lufthansa}
                className="img-fluid rounded-start"
                alt="airline logo"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card my-3" style={{ maxWidth: "635px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={emirates}
                className="img-fluid rounded-start"
                alt="airline logo"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
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
