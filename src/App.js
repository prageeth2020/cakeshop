import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Top from "./Components/Top";
import NavBar from "./Components/navBar";
import Home from "./Components/Home";
import Slideshow from "./Components/slideshow";
function App() {
  return (
    <div>
        <Top/>


        <Router>

            <NavBar/>
            <Slideshow/>
            <Route exact path="/" component={Home} />

        </Router>

    </div>
  );
}

export default App;
