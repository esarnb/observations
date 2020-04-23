import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home/Home.js";
import Etext from "./Pages/Etext/Etext.js";

import NavBar from "./Components/NavBar/NavBar.js"
import NotFound from "./Components/NotFound/NotFound.js";
import "./App.css";

class App extends React.Component {
  state = { profile: null, page: null }

  setProfile = (user) => { this.setState({profile: user}) }
	AppPage = (page) => {
		switch(page) {
			case "Etext": this.setState({page: <Etext />}); break;
      case "Projects": this.setState({page: <NotFound />}); break;
      // case "Login": this.setState({page: <Home />}); break;
      // case "Logout": this.setState({profile: null, page: <NotFound />}); break;
      default: this.setState({page: <Home profile={this.state.profile} setProfileRoot={this.setProfile} />})
		}
	}

  render() {
    return (  
      <Router>
      <React.Fragment>
        <NavBar NavPage={this.AppPage} />
        <Switch> 
          <Route exact path="/" render={() => (this.state.page || this.AppPage()) } />
          <Route exact path="/bartram" render={() => <Etext /> } />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
    )
  }
}

export default App;