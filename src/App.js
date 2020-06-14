import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Top from "./Components/Top";
import NavBar from "./Components/navBar";
import Home from "./Components/Home";

function App() {
  return (
    <div>
        <Top/>
        <NavBar/>
        <Router>


            <Route exact path="/" component={Home} />

        </Router>

    </div>
  );
}

export default App;
