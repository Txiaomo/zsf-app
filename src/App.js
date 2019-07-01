import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import store from "./store";
import Login from "./container/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </Provider>
    );
    /* return (
      <BrowserRouter>
      <Header></Header>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </BrowserRouter>
    ); */
  }
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  return <h3>Requested Param: 11111111</h3>;
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default App;
