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
import Footer from "./Components/Footer";
import Cart from "./Components/cart";
import Admin from "./Components/admin";
function App() {
  return (
    <div>
        <Top/>


        <Router>

            <NavBar/>

            <Route exact path="/" component={Home} />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Admin" component={Admin} />
        </Router>


        <Footer/>

    </div>
  );
}

export default App;
