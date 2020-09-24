import React, { Component } from "react";
import html from './html/index.html'

export default class App extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        );
    }
}