import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Slideshow extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="jumbotron img1">
                                <h1 className="display-4">Hello, world!</h1>
                                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for
                                    <br/>calling extra attention to featured content or information.</p>
                                <hr className="my-4"/>
                                    <p>It uses utility classes for typography and spacing to space content out within
                                        <br/>the larger container.</p>
                                    <a className="btn btn-primary btn-lg boxed-btn31" href="#" role="button">Learn more >></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="jumbotron img2">
                                <h1 className="display-4">Hello, world!</h1>
                                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for
                                    <br/>calling extra attention to featured content or information.</p>
                                <hr className="my-4"/>
                                    <p>It uses utility classes for typography and spacing to space content out within
                                        <br/>  the larger container.</p>
                                    <a className="btn btn-primary btn-lg boxed-btn31" href="#" role="button">Learn more >></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="jumbotron img3">
                                <h1 className="display-4">Hello, world!</h1>
                                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for
                                    <br/>calling extra attention to featured content or information.</p>
                                <hr className="my-4"/>
                                    <p>It uses utility classes for typography and spacing to space content out within
                                        <br/> the larger container.</p>
                                    <a className="btn btn-primary btn-lg boxed-btn31" href="#" role="button">Learn more >></a>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        );
    }
}

export default Slideshow;