import React from "react";
import Countries from "./countries";
import CreateNewCountry from "./createNewCountry";
import { countries } from "../utilities/arrayOfCountries";

class ListOfCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: countries,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
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

  handleFormat(code, symbol) {
    let currencyTag = document.getElementsByClassName("currencyFormat");

    for (let i = 0; i < currencyTag.length; i++) {}
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
              format={this.handleFormat}
              update={this.handleUpdate}
            />
          </table>
        </div>
      </>
    );
  }
}

export default ListOfCountries;
