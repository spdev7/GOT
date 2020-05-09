import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeComponent from "./components/HomeComponent";
import ListComponent from "./components/ListComponent";
import CountComponent from "./components/CountComponent";
import SearchComponent from "./components/SearchComponent";
import Navbar from "./components/Navbar";
function App() {
 
  return(
    <Router>
      <div className="container">
      <Navbar />
        <br/>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/list" exact component={ListComponent} />
        <Route path="/count" exact component={CountComponent} />
        <Route path="/search" exact component={SearchComponent} />
      </div>
    </Router>
  )
  

};

export default App;
