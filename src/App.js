// import "./App.css";
import React, { useState, Component } from "react";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  let pageSize = 8;
  let apiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgres] = useState(0);
  // state = {
  //   progress: 0,
  // };
  const setProgress = (progress) => {
    setProgres(progress);
  };
  // render() {
  return (
    <BrowserRouter>
      <div>
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                pageSize={pageSize}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/home"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                pageSize={pageSize}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/About"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                pageSize={pageSize}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/Business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                pageSize={pageSize}
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                pageSize={pageSize}
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/General"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                pageSize={pageSize}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/Health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                pageSize={pageSize}
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/Science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                pageSize={pageSize}
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/Sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                pageSize={pageSize}
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/Technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                pageSize={pageSize}
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
// }

export default App;
