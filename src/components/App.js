import React from "react";
import Header from "./Header";
import "../css/reset.css";
import "../css/App.css";
import { Route } from "react-router-dom";
import Introduce from "../routes/Introduce";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Route exact path="/">
        <Introduce />
      </Route>
    </div>
  );
};

export default App;
