import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Show from "./pages/show";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/show.jsx" component={Show}></Route>
      {/* <Route exact path="/show.jsx/:id" render={ (props) => <Show country={this.state.obj}} />} </Route> */}
    </Switch>
  );
};

export default Main;
