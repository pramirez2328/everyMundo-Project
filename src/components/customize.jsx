import React from "react";

// component to get users values
// mostly checkboxes and an input to get the value
// all checkboxes return booleans
function Customize() {
  return (
    <div>
      <div className="mb-3 border p-3 border-secondary rounded sticky">
        <form>
          <div className="d-flex justify-content-between">
            <div>
              <h5 style={{ color: "blue", textAlign: "center" }}>
                Customize <br></br>your amount:
              </h5>
            </div>

            <div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showCode"
                />
                <label className="form-check-label" htmlFor="showCode">
                  Show Code
                </label>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showSymbol"
                />
                <label className="form-check-label" htmlFor="showSymbol">
                  Show Symbol
                </label>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showCents"
                />
                <label className="form-check-label" htmlFor="showCents">
                  Show Cents
                </label>
              </div>
            </div>

            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioSymbol"
                  id="symbolBPrice"
                />
                <label className="form-check-label" htmlFor="symbolBPrice">
                  Symbol before price
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioSymbol"
                  id="flexRadio"
                />
                <label className="form-check-label" htmlFor="flexRadio">
                  Symbol after Price
                </label>
              </div>
            </div>

            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="codeBPrice"
                />
                <label className="form-check-label" htmlFor="codeBPrice">
                  Code before price
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Code after Price
                </label>
              </div>
            </div>

            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="delimiter"
                  id="dot"
                />
                <label className="form-check-label" htmlFor="dot">
                  Dot Thousand Delimiter
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="delimiter"
                  id="comma"
                />
                <label className="form-check-label" htmlFor="comma">
                  Comma Thousand Delimiter
                </label>
              </div>
            </div>

            <div
              className="input-group"
              style={{ width: "20%", height: "7px" }}
            >
              <small className="text-center w-100">
                Enter the amount in this format
              </small>
              <span className="input-group-text">Amount</span>
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
                id="amount"
                placeholder="12345.56"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Customize;
