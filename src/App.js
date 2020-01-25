import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./Components/NotFound/NotFound.js";
import Home from "./Pages/Home/Home.js";
import Etext from "./Pages/Etext/Etext.js";
import "./App.css";

class App extends React.Component {
  state = { profile: null, page: null }

  setProfile = (user) => { this.setState({profile: user}) }

	AppPage = (page) => {
		switch(page) {
			case "Etext": this.setState({page: <Etext HomePage={this.AppPage}/>}); break;
			case "Projects": this.setState({page: <NotFound />}); break;
      default: this.setState({page: <Home profile={this.state.profile} setProfileRoot={this.setProfile} HomePage={this.AppPage}/>})
		}
	}

  render() {
    return (  
      <Router>
      <React.Fragment>
        <Switch> 
        <Route exact path="/" render={() => (this.state.page || this.AppPage()) } />
        <Route exact path="/etext" render={() => (<Etext />)} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
    )
  }
}

export default App;