import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Top extends Component {
    render() {
        return (
            <div className="backgroundTop">
                <div className="container p-2">
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <div className="form-check form-check-inline">
                                <a href="" className=" "><i className="fab fa-facebook-f text-primary "></i></a>
                                <a href="" className="mx-5"><i className="fas fa-envelope text-danger"></i></a>
                            </div>
                        </div>
                        <div className="col-4 text-right">
                            <div className="form-check form-check-inline">
                                <a href="" className=" "><i className="fas fa-phone-alt text-dark "></i></a>
                                <label className="form-check-label mobleNu mx-2" >+94 77 755 6955</label>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        );
    }
}

export default Top;