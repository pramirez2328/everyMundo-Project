import React from "react";
import ListOfCountries from "./components/listOfCountries.jsx";
import NavBar from "./components/NavBar.jsx";
import Show from "./components/show.jsx";

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
