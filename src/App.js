import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Login from "./container/Login";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path={"/"} exact component={Login} />
          <Route path={"/login"} exact component={Login} />
        </BrowserRouter>
      </Provider>
    );
  }

  componentDidMount() {
    console.log("app.js");
    // this.props.
  }
}

export default App;
