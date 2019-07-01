import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/register">进入注册</Link>
        <div onClick={() => (location.pathname = "/register")}>进入注册</div>
        <div onClick={()=>this.props.history.push('/register')}>进入注册</div>
        登录
      </div>
    );
  }

  componentDidMount() {
    console.log("login.js");
  }
}

export default Login;
