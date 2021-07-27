import React from "react";
import Countries from "./countries";
import CreateNewCountry from "./createNewCountry";
import Customize from "./customize";
import { countries } from "../utilities/arrayOfCountries";

countries.sort((a, b) => a.country.localeCompare(b.country));

class ListOfCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: countries,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCustomize = this.handleCustomize.bind(this);
  }

  handleUpdate(id, country, currency, code, symbol) {
    document.getElementById("country").value = country;
    document.getElementById("currency").value = currency;
    document.getElementById("code").value = code;
    document.getElementById("symbol").value = symbol;
    this.handleDelete(id);
  }

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

  handleCustomize(code, symbol) {
    let showCode = document.getElementById("showCode").checked;
    let showSymbol = document.getElementById("showSymbol").checked;
    let showCents = document.getElementById("showCents").checked;
    let codeBPrice = document.getElementById("codeBPrice").checked;
    let symbolBPrice = document.getElementById("symbolBPrice").checked;
    let dot = document.getElementById("dot").checked;
    let amount = document.getElementById("amount").value;

    let result = amount.split("");
    let index = result.findIndex((i) => i === ".");
    if (index === -1)
      alert(
        "Enter the amount in the right format example: 1234.56 if no cents, type 00 after the dot"
      );
    if (dot) {
      result[index] = ",";
      for (let i = index - 3; i > 0; i = i - 3) {
        result.splice(i, 0, ".");
      }
    } else {
      for (let i = index - 3; i > 0; i = i - 3) {
        result.splice(i, 0, ",");
      }
    }

    if (!showCents) {
      let i = result.findIndex((i) => i === ".");
      result.splice(i);
    }

    if (showSymbol) {
      if (symbolBPrice) {
        result.unshift(symbol);
      } else {
        result.push(symbol);
      }
    }

    if (showCode) {
      if (codeBPrice) {
        result.unshift(code);
      } else {
        result.push(code);
      }
    }

    let finalResult = "";

    for (let i = 0; i < result.length; i++) {
      finalResult += result[i];
    }

    let currencyTag = document.getElementsByClassName("currencyFormat");

    for (let i = 0; i < currencyTag.length; i++) {
      currencyTag[i].textContent = finalResult;
    }
  }

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
