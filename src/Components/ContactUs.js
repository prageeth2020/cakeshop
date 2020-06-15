import React, {Component} from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section contact-section">
                    <div className="container">
                        <div className="row d-flex mb-5 contact-info justify-content-center">
                            <div className="col-md-10">
                                <div className="row mb-5">
                                    <div className="col-md-4 text-center d-flex">
                                        <div className="border w-100 p-4">
                                            <div className="icon">
                                                <span className="fa fa-home fa-2x"></span>
                                            </div><br/>
                                            <span className="contactDetails">Address:</span><br/><br/><p className="contactD"> 198 West 21th Street, <br/>Suite 721,<br/> New York NY 10016
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center d-flex">
                                        <div className="border w-100 p-4">
                                            <div className="icon">
                                                <span className="fa fa-phone fa-2x"></span>
                                            </div><br/>
                                            <span className="contactDetails">Phone:</span><br/><br/> <p className="contactD">077-7894523<br/>071-7531256</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center d-flex">
                                        <div className="border w-100 p-4">
                                            <div className="icon">
                                                <span className="fa fa-envelope-o fa-2x"></span>
                                            </div><br/>
                                            <span className="contactDetails">Email:</span><br/><br/> <p className="contactD"><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row block-9 justify-content-center mb-5">
                            <div className="col-md-10 mb-md-5">
                                <h2 className="text-center contactDetails1">If you got any questions <br/>please do not hesitate to send
                                    us a message </h2>
                                <form action="#" className="border p-5 contact-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" className="form-control" placeholder="Phone No." required/>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="" id="" cols="30" rows="7" className="form-control"
                                                  placeholder="Message" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Send Message" className="boxed-btn3"/>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ContactUs;