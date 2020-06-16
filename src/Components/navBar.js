import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super();


        this.state = {
            home : "nav-item active mx-2",
            AboutUs : "nav-item  mx-2",
            ContactUs : "nav-item  mx-2"

        };


    }

    Home = () => {
        this.setState({
            home : "nav-item active mx-2",
            AboutUs : "nav-item  mx-2",
            ContactUs : "nav-item  mx-2"
        })
    }
    AboutUs = () => {
        this.setState({
            home : "nav-item  mx-2",
            AboutUs : "nav-item active mx-2",
            ContactUs : "nav-item  mx-2"
        })
    }
    ContactUs = () => {
        this.setState({
            home : "nav-item  mx-2",
            AboutUs : "nav-item  mx-2",
            ContactUs : "nav-item active mx-2"
        })
    }
    render() {
        return (
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                    <div className="container">
                        <b className=" ">POC Cake.com</b>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse sideSpace" id="navbarTogglerDemo01">

                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">

                            </ul>
                            <ul className="navbar-nav my-2 my-lg-0 ">
                                <li className= {this.state.home } >
                                    <Link className="nav-link link" to="/"  onClick={this.Home}>Home</Link>
                                </li>
                                <li className="nav-item mx-2 dropdown">
                                    <a className="nav-link nav-item dropdown-toggle" data-toggle="dropdown" href="#"
                                       role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Cakes</a>
                                        <a className="dropdown-item" href="#">Cup Cakes</a>
                                        <a className="dropdown-item" href="#">Gataeux</a>
                                        <a className="dropdown-item" href="#">Chees Cakes</a>
                                        <a className="dropdown-item" href="#">Chill Chees Cake</a>
                                        <a className="dropdown-item" href="#">Brownies</a>
                                    </div>
                                </li>
                                <li className= {this.state.AboutUs } >
                                    <Link className="nav-link link" to="/AboutUs" onClick={this.AboutUs}>About Us</Link>

                                </li>

                                <li className= {this.state.ContactUs } >
                                    <Link className="nav-link link" to="/ContactUs" onClick={this.ContactUs}>Contact Us</Link>

                                </li>
                                <li className= {this.state.ContactUs } >

                                    <button className="btn  nav-link link" type="button">
                                        <i className="fas fa-shopping-cart"></i> <span className="badge">0</span>
                                    </button>

                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;