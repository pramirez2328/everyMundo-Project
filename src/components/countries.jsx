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
              {currentCountry.contry}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  props.customize(currentCountry.code, currentCountry.symbol)
                }
              >
                SHOW
              </button>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() =>
                  props.update(
                    currentCountry.id,
                    currentCountry.country,
                    currentCountry.currency,
                    currentCountry.code,
                    currentCountry.symbol
                  )
                }
              >
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
