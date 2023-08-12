import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 8;
  apiKey = process.env.REACT_APP_API_KEY;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="in"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/home"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="in"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/About"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="in"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/Business"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="in"
                  pageSize={this.pageSize}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="in"
                  pageSize={this.pageSize}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/General"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="in"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/Health"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="in"
                  pageSize={this.pageSize}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/Science"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="in"
                  pageSize={this.pageSize}
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/Sports"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="in"
                  pageSize={this.pageSize}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/Technology"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  country="in"
                  pageSize={this.pageSize}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
