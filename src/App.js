import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './Common/Home';
import Main from './Common/Main';
import Landing from './Component/Landing';
class App extends Component {
  render() {
    return (
      <Router baseName={"/"}>
      <Home>
        <Route exact path={"/"} component={Main} />
        <Route exact path={"/notes"} component={Landing} />
      </Home>
      </Router>  
    );
  }
}

export default App;

