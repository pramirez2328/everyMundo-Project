import React from "react";
import Main from "./Main.jsx";
import NavBar from "./NavBar.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
