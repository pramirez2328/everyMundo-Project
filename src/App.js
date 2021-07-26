import React from "react";
import ListOfCountries from "./components/listOfCountries.jsx";
import NavBar from "./components/NavBar.jsx";
import Show from "./components/show.jsx";
class App extends React.Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "sticky",
            top: "700px",
            float: "right",
            marginRight: "4rem",
          }}
        >
          <a className="top-link hide" href="#top">
            <span>Back to top</span>
          </a>
        </div>

        <div className="container" id="container">
          <NavBar />
          <div className="sticky-top mb-3" style={{ backgroundColor: "white" }}>
            <Show />
          </div>

          <ListOfCountries />
        </div>
      </div>
    );
  }
}

export default App;
