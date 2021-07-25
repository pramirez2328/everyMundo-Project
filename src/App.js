import React from "react";
import ListOfCountries from "./listOfCountries.jsx";
import NavBar from "./NavBar.jsx";
import Show from "./show.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="container" id="container">
        <div className="sticky-top" style={{ backgroundColor: "white" }}>
          <NavBar />
          <Show />
        </div>

        <ListOfCountries />
      </div>
    );
  }
}

export default App;
