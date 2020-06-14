import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Slideshow extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="jumbotron">
                        <h1 className="display-4">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.</p>
                        <hr className="my-4"/>
                            <p>It uses utility classes for typography and spacing to space content out within the larger
                                container.</p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </div>
                    <div className="carousel-item">
                        <div className="jumbotron bgImg2 text-white" >
                            <h1 className="display-4">Our Service</h1>
                            <p className="lead">You can see what we are going to offer you</p>
                            <hr className="my-4"/>

                            <p className="lead">

                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="jumbotron bgImg3 text-white">
                            <h1 className="display-4">Contact Us</h1>
                            <p className="lead">If you want to use this web application as you Learning Management System please feel free to contact us</p>
                            <hr className="my-4"/>

                            <p className="lead">

                            </p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        );
    }
}

export default Slideshow;