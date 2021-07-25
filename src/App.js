import React from "react";
import ListOfCountries from "./components/listOfCountries.jsx";
import NavBar from "./components/NavBar.jsx";
import Show from "./components/show.jsx";
import CreateNewCountry from "./components/createNewCountry.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="container" id="container">
        <div className="sticky-top mb-3" style={{ backgroundColor: "white" }}>
          <NavBar />
          <Show />
          <CreateNewCountry />
        </div>

        <ListOfCountries />
      </div>
    );
  }
}

export default App;
