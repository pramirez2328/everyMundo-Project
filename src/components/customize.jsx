import React from "react";

function Customize() {
  return (
    <div>
      <div className="mb-3 border p-3 border-secondary rounded sticky">
        <div className="d-flex justify-content-between">
          <div>
            <h5 style={{ color: "blue" }}>Customize Format </h5>
            <h6>Choose from the options</h6>
          </div>

          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Show Code?
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Show Symbol?
            </label>
          </div>

          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Show Cents
            </label>
          </div>

          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Code Before Price?
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Code After Price?
              </label>
            </div>
          </div>

          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault2"
                id="flexRadioDefault3"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Dot (.) Thousand Delimiter?
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault2"
                id="flexRadioDefault4"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Comma (,) Thousand Delimiter?
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customize;
