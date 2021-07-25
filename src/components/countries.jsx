import React from "react";

function Countries(props) {
  return (
    <tbody>
      {props.objOfCountries.map((currentCountry) => {
        return (
          <tr key={currentCountry.id}>
            <th scope="row">{currentCountry.country}</th>
            <td>{currentCountry.currency}</td>
            <td>{currentCountry.code}</td>
            <td>{currentCountry.symbol}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  props.format(currentCountry.code, currentCountry.symbol)
                }
              >
                Show
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-warning">
                Update
              </button>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => props.delete(currentCountry.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default Countries;
