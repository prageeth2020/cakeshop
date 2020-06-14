import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Top extends Component {
    render() {
        return (
            <div className="backgroundTop">
                <div className="container text-wrap mrgn p-2  ">

                    <a href="" className=" "><i className="fab fa-facebook-f text-white "></i></a>
                    <a href="" className="mx-5"><i className="fas fa-envelope text-white"></i></a>
                    <a href="" className=""><i className="fab fa-instagram text-white"></i></a>


                </div>

            </div>
        );
    }
}

export default Top;