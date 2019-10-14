import React, { Component } from "react";

import "./App.scss";

import { Router, Route } from "react-router-dom";

import { history } from "./helpers";
import { withNaming } from "@bem-react/classname";
const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("App");

export class App extends Component {
  render() {
    return (
      <div className={b()}>
        <div className={b("test")}></div>

        <Router history={history}>
          <div>
            <Route exact path="/" component={() => <div>Hello!</div>} />
          </div>
        </Router>
      </div>
    );
  }
}
