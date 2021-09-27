import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import App from "./App";
import Gallery from "./Gallery";
import Lessons from "./Lessons";
import Lesson from "./";
import { lesson_one } from "./data/markdown";

import "./index.css";

const Index = () => (
  <div className="main">
    <BrowserRouter>
      <Header />
      <div>
        <Route exact path="/" component={App} />
        <Route path="/experience" component={Lessons} />
        <Route path="/about-me" component={Gallery} />
        <Route path="/resume">
          <Lesson lesson={resume} />
        </Route>
        <Route path="/projects">
          <Lesson lesson={projects} />
        </Route>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("root"));
