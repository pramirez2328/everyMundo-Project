import React from "react";
import Countries from "./countries";
import { countries } from "../arrayOfCountries";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: countries,
    };

    this.handleDelete = this.handleDelete.bind(this);
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
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">COUNTRY</th>
                <th scope="col">CURRENCY</th>
                <th scope="col">CODE</th>
                <th scope="col">SYMBOL</th>
                <th scope="col">DISPLAY</th>
                <th scope="col">UPDATE </th>
                <th scope="col">DELETE </th>
              </tr>
            </thead>
            <Countries
              objOfCountries={this.state.obj}
              delete={this.handleDelete}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
