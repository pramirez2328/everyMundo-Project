import React from "react";
import Countries from "./countries";
import CreateNewCountry from "./createNewCountry";
import Customize from "./customize";
import { worldCountries } from "../utilities/arrayOfCountries";

// sort array by ascending order
worldCountries.sort(function (a, b) {
  var countryA = a.country.toUpperCase(); // ignore upper and lowercase
  var countryB = b.country.toUpperCase(); // ignore upper and lowercase
  if (countryA < countryB) {
    return -1;
  }
  if (countryA > countryB) {
    return 1;
  }

  // names must be equal
  return 0;
});

class ListOfCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: worldCountries,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCustomize = this.handleCustomize.bind(this);
  }

  // handle update function is responsable for updating
  // the countries-objects if  user wants to change the
  // value of any key, when the user pushes the button
  // the values return to the input boxes and the object
  // is delete
  handleUpdate(id, country, currency, code, symbol) {
    document.getElementById("country").value = country;
    document.getElementById("currency").value = currency;
    document.getElementById("code").value = code;
    document.getElementById("symbol").value = symbol;
    this.handleDelete(id);
  }

  // handle create function give the user to create a
  // new object! the new object is pushed to the begining of the
  // array with an unique id
  handleCreate(object) {
    let newCountry = document.getElementById("country");
    let newCurrency = document.getElementById("currency");
    let newCode = document.getElementById("code");
    let newSymbol = document.getElementById("symbol");
    let newObject = {
      id: object.length + 1,
      country: newCountry.value,
      currency: newCurrency.value,
      code: newCode.value,
      symbol: newSymbol.value,
    };

    object.unshift(newObject);
    this.setState({ obj: object });

    newCountry.value = "";
    newCurrency.value = "";
    newCode.value = "";
    newSymbol.value = "";
  }

  //handle customize is the main function of the project
  handleCustomize(code, symbol) {
    // collect all the desire values
    let showCode = document.getElementById("showCode").checked;
    let showSymbol = document.getElementById("showSymbol").checked;
    let showCents = document.getElementById("showCents").checked;
    let codeBPrice = document.getElementById("codeBPrice").checked;
    let symbolBPrice = document.getElementById("symbolBPrice").checked;
    let dot = document.getElementById("dot").checked;
    let amount = document.getElementById("amount").value;

    //string amount to array
    let result = amount.split("");

    //find the index of the dot
    let index = result.findIndex((i) => i === ".");

    //The user must enter the amount in the right format!
    if (index === -1) {
      alert(
        "Enter the amount in the right format, example: 1234.56 if no cents, type 0 after the dot"
      );
    }

    //conditional to eliminate the cents
    if (!showCents) {
      let i = result.findIndex((i) => i === ".");
      result.splice(i);
    }

    //conditional to add dots every 3 digits, example 1.2345,00
    if (dot) {
      if (result[index] === undefined) {
        for (let i = index - 3; i > 0; i = i - 3) {
          result.splice(i, 0, ".");
        }
      } else {
        result[index] = ",";
        for (let i = index - 3; i > 0; i = i - 3) {
          result.splice(i, 0, ".");
        }
      }
    } else {
      if (result[index] === undefined) {
        for (let i = index - 3; i > 0; i = i - 3) {
          result.splice(i, 0, ",");
        }
      } else {
        result[index] = ".";
        for (let i = index - 3; i > 0; i = i - 3) {
          result.splice(i, 0, ",");
        }
      }
    }

    //conditon to add a symbol by default is after the price
    if (showSymbol) {
      if (symbolBPrice) {
        result.unshift(symbol);
      } else {
        result.push(symbol);
      }
    }

    //conditon to add a code by default is after the price
    if (showCode) {
      if (codeBPrice) {
        result.unshift(code);
      } else {
        result.push(code);
      }
    }

    result = result.join("");

    let currencyTag = document.getElementsByClassName("currencyFormat");

    for (let i = 0; i < currencyTag.length; i++) {
      currencyTag[i].textContent = result;
    }
  }

  //function to complety delete an object by its id
  handleDelete(id) {
    let filterArray = this.state.obj.filter((element) => {
      return element.id !== id;
    });

    this.setState({ obj: filterArray });
  }

  render() {
    return (
      <>
        <CreateNewCountry
          objOfCountries={this.state.obj}
          create={this.handleCreate}
        />
        <Customize />

        <hr />
        <div className="container">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Country</th>
                <th scope="col">Currency</th>
                <th scope="col">Code</th>
                <th scope="col">Symbol</th>
                <th scope="col">Display</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            {/* component to iterate over every object */}
            <Countries
              objOfCountries={this.state.obj}
              delete={this.handleDelete}
              update={this.handleUpdate}
              customize={this.handleCustomize}
            />
          </table>
        </div>
      </>
    );
  }
}

export default ListOfCountries;
