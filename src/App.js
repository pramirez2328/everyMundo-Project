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
          {/* link to back to the top */}
          <a className="top-link hide" href="#top">
            <span>Back to top</span>
          </a>
        </div>

        <div className="container" id="container">
          {/* the nav bar has the link to download the page, title, and company image */}
          <NavBar />

          {/* sticky show to display formatted currency */}
          <div className="sticky-top mb-3" style={{ backgroundColor: "white" }}>
            <Show />
          </div>

          {/* main class Component */}
          <ListOfCountries />
        </div>
      </div>
    );
  }
}

export default App;
