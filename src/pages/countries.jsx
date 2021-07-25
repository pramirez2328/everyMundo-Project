import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="./show.jsx">
                {currentCountry.contry}
                <button type="button" className="btn btn-primary">
                  Show
                </button>
              </Link>
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
