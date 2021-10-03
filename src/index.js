import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header, Footer } from "./components";
import Gallery from "./Gallery";
import projects from "./projects";
import resume from "./resume";
import articles from "./articles";
import home from "./home";

import "./index.css";

const Index = () => (
  <div className="main">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/about-me" component={Gallery} />
        <Route path="/resume" component={resume} />
        <Route path="/projects" component={projects} />
        <Route path="/articles" component={articles} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("root"));
