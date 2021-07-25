import React from "react";
import Countries from "./countries";
import { countries } from "./arrayOfCountries";

class ListOfCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: countries,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
  }

  handleFormat(p) {
    console.log(p);
  }

  handleDelete(id) {
    let filterArray = this.state.obj.filter((element) => {
      return element.id !== id;
    });

    this.setState({ obj: filterArray });
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped table-hover">
          <Countries
            objOfCountries={this.state.obj}
            delete={this.handleDelete}
            format={this.handleFormat}
          />
        </table>
      </div>
    );
  }
}

export default ListOfCountries;
