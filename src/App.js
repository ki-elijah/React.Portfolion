import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import MyCV from "./components/MyCV";
import NavBar from "./components/NavBar";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Blog} path="/blog" />
        <Route component={Project} path="/project" />
        <Route component={Contact} path="/contact" />
        <Route component={MyCV} path="/cv" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
