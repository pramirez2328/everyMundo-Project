import React from "react";

function Customize() {
  return (
    <div>
      <div className="mb-3 border p-3 border-secondary rounded sticky">
        <div className="d-flex justify-content-between">
          <div>
            <h5 style={{ color: "blue" }}>Customize your amount:</h5>
          </div>
          <div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="showCode"
              />
              <label className="form-check-label" htmlFor="showCode">
                Show Code?
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="showSymbol"
              />
              <label className="form-check-label" htmlFor="showSymbol">
                Show Symbol?
              </label>
            </div>
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

          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="cBeforePrice"
                id="cBPrice"
              />
              <label className="form-check-label" htmlFor="cBeforePrice">
                Code Before Price?
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="cAfterPrice"
                id="cAPrice"
              />
              <label className="form-check-label" htmlFor="cAfterPrice">
                Code After Price?
              </label>
            </div>
          </div>

          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="dotDelimiter"
                id="dot"
              />
              <label className="form-check-label" htmlFor="dot">
                Dot Thousand Delimiter?
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="commaDelimiter"
                id="comma"
              />
              <label className="form-check-label" htmlFor="commaDelimiter">
                Comma Thousand Delimiter?
              </label>
            </div>
          </div>

          <div class="input-group" style={{ width: "20%", height: "10px" }}>
            <span class="input-group-text">Amount</span>
            <span class="input-group-text">$</span>
            <input
              type="text"
              class="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
              id="amount"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customize;
