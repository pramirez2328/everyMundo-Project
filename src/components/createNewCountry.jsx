import React from "react";

function CreateNewCountry() {
  return (
    <div className="mb-3 border p-3 border-secondary rounded">
      <form>
        <div className="d-flex justify-content-around">
          <h4>Create a new country</h4>
          <input
            id="country"
            type="text"
            classname="form-control"
            placeholder="enter country"
            required
          />
          <input
            id="currency"
            type="text"
            classname="form-control"
            placeholder="enter currency"
            required
          />
          <input
            id="code"
            type="text"
            classname="form-control"
            placeholder="enter code"
          />
          <input
            id="symbol"
            type="text"
            classname="form-control"
            placeholder="enter symbol"
            required
          />
          <button type="button" class="btn btn-success">
            ADD COUNTRY
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewCountry;
