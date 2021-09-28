import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header, Footer } from "./components";
import App from "./App";
import Gallery from "./Gallery";
import Lessons from "./Lessons";
import Lesson from "./Lesson";
import projects from "./projects";
import resume from "./resume";

import "./index.css";

const Index = () => (
  <div className="main">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/experience" component={Lessons} />
        <Route path="/about-me" component={Gallery} />
        <Route path="/resume" component={resume} />
        <Route path="/projects" component={projects} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("root"));
