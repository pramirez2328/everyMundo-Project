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
        <CreateNewCountry />
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
            />
          </table>
        </div>
      </>
    );
  }
}

export default ListOfCountries;
