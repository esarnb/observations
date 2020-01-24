import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./Components/NotFound/NotFound.js";
import Home from "./Pages/Home/Home.js";
import "./App.css";

class App extends React.Component {
  state = { profile: null }

  setProfile = (user) => { this.setState({profile: user}) }

  render() {
    return (  
      <Router>
      <React.Fragment>
        <Switch> 
          <Route exact path="/" render={props => (<Home {...props} profile={this.state.profile} setProfileRoot={this.setProfile}/>)} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
    )
  }
}

export default App;