import React, {Component} from 'react';

class NewArrival extends Component {
    render() {
        return (
            <div className="">
                <h2 className="text-center">N E W  - A R R I V A L</h2>
                <div className="container my-4">
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src={require('./Images/img1.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins
                                    ago</small></p>
                            </div>
                            <div className="form-row p-3">
                                <a className="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3"><i
                                    className="fas fa-chevron-right pl-1"></i></a>

                            </div>


                        </div>
                        <div className="card">
                            <img className="card-img-top" src={require('./Images/img2.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to
                                    additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins
                                    ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={require('./Images/img2.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This card has even longer content than
                                    the first to show that equal height action.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins
                                    ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewArrival;