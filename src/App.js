import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import './themify-icons/themify-icons.css'
import Top from "./Components/Top";
import NavBar from "./Components/navBar";
import Home from "./Components/Home";
import Slideshow from "./Components/slideshow";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
function App() {
  return (
    <div>
        <Top/>


        <Router>

            <NavBar/>
            <Slideshow/>
            <Route exact path="/" component={Home} />


        </Router>
        <ContactUs/>
        <AboutUs/>

    </div>
  );
}

export default App;
