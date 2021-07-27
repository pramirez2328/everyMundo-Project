import React from "react";

// component to create a new object
// inputs an a bottom
// props: array of objects and function

function CreateNewCountry(props) {
  return (
    <div className="mb-3 border p-3 border-secondary rounded sticky">
      <form>
        <div className="d-flex justify-content-between">
          <h5 style={{ color: "blue" }}>Create a new country</h5>
          <input
            id="country"
            type="text"
            className="form-control"
            placeholder="enter country"
            style={{ width: "17%" }}
            required
          />
          <input
            id="currency"
            type="text"
            className="form-control"
            placeholder="enter currency"
            style={{ width: "17%" }}
            required
          />
          <input
            id="code"
            type="text"
            className="form-control"
            placeholder="enter code"
            style={{ width: "17%" }}
          />
          <input
            id="symbol"
            type="text"
            className="form-control"
            placeholder="enter symbol"
            style={{ width: "17%" }}
            required
          />
          <button
            type="button"
            className="btn btn-success"
            onClick={() => props.create(props.objOfCountries)}
          >
            ADD COUNTRY
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewCountry;
