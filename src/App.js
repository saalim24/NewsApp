import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route
              exact
              path="/:category"
              render={(props) => (
                <News
                  key={props.match.params.category}
                  country="us"
                  category={props.match.params.category}
                />
              )}
            />
            <News> key ='/' country='us' category="general"</News>
          </Switch>
        </Router>
      </>
    );
  }
}
