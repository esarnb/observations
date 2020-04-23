import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home/Etext.js";
import NavBar from "./Components/NavBar/NavBar.js"
import NotFound from "./Components/NotFound/NotFound.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (   
      <Router>
        <React.Fragment>
          <NavBar NavPage={this.AppPage} />
          <Switch> 
            <Route exact path="/observations"> <Home /> </Route>
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;