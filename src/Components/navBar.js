import React, {Component} from 'react';

class NavBar extends Component {
    constructor() {
        super();


        this.state = {
            home : "nav-item active mx-2 ",
            OurService : "nav-item  mx-2",
            ContactUs : "nav-item  mx-2"

        };


    }

    Home = () => {
        this.setState({
            home : "nav-item active mx-2",
            OurService : "nav-item  mx-2",
            ContactUs : "nav-item  mx-2"
        })
    }
    OurService = () => {
        this.setState({
            home : "nav-item  mx-2",
            OurService : "nav-item active mx-2",
            ContactUs : "nav-item  mx-2"
        })
    }
    ContactUs = () => {
        this.setState({
            home : "nav-item  mx-2",
            OurService : "nav-item  mx-2",
            ContactUs : "nav-item active mx-2"
        })
    }
    render() {
        return (
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light clr ">
                    <div className="container">
                        <b className="navBar">Study Support</b>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse sideSpace" id="navbarTogglerDemo01">

                            <ul className="navbar-nav my-2 my-lg-0 App1  ">
                                <li className= {this.state.home } >
                                    <p className="nav-link rcorners1 mx-5" >Home</p>

                                </li>
                                <li className= {this.state.OurService } >
                                    <p className="nav-link mx-5" >Products</p>
                                </li>
                                <li className= {this.state.ContactUs } >
                                    <p className="nav-link mx-5" >Contact Us</p>
                                </li>
                                <li className= {this.state.ContactUs } >
                                    <p className="nav-link mx-5" >About Us</p>
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