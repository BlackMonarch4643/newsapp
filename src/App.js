import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 8;
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News country="in" pageSize={this.pageSize} category="general" />}
            ></Route>
            <Route
              exact
              path="/home"
              element={<News country="in" pageSize={this.pageSize} category="general" />}
            ></Route>
            <Route
              exact
              path="/About"
              element={<News country="in" pageSize={this.pageSize} category="general" />}
            ></Route>
            <Route
              exact
              path="/Business"
              element={<News country="in" pageSize={this.pageSize} category="business" />}
            ></Route>
            <Route
              exact
              path="/Entertainment"
              element={
                <News country="in" pageSize={this.pageSize} category="entertainment" />
              }
            ></Route>
            <Route
              exact
              path="/General"
              element={<News country="in" pageSize={this.pageSize} category="general" />}
            ></Route>
            <Route
              exact
              path="/Health"
              element={<News country="in" pageSize={this.pageSize} category="health" />}
            ></Route>
            <Route
              exact
              path="/Science"
              element={<News country="in" pageSize={this.pageSize} category="science" />}
            ></Route>
            <Route
              exact
              path="/Sports"
              element={<News country="in" pageSize={this.pageSize} category="sports" />}
            ></Route>
            <Route
              exact
              path="/Technology"
              element={<News country="in" pageSize={this.pageSize} category="technology" />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
