import React, {Component} from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="welcome_docmed_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="welcome_thumb">
                                    <div className="thumb_1">
                                        <img src="img/about/a1.png" className="img-fluid" alt="Responsive image"/>
                                    </div>
                                    <br/><br/>
                                        <div className="thumb_2">
                                            <img src="img/about/a1.png" className="img-fluid" alt="Responsive image"/>
                                        </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="welcome_docmed_info">
                                    <h2 className="contactDetails1">Welcome to POC Cake.com</h2>
                                    <h3 className="contactDetails">Best Solution for <br/>
                                        Your Birthdays, Parties & Wedding Cakes</h3> <br/>
                                    <p className="para1">We are a team of frelancers gathered to do your Project well. Team is always
                                        available to response your request within 2 to 3 hours.
                                        We will contact you immedietly.</p>
                                    <ul>
                                        <li><i className="flaticon-right"></i> 24 * 7 Availability
                                        </li>
                                        <li><i className="flaticon-right"></i> Deadline Guaranteed
                                        </li>
                                        <li><i className="flaticon-right"></i> No Plagiarism
                                        </li>
                                        <li><i className="flaticon-right"></i> Privacy Guaranteed
                                        </li>
                                    </ul>
                                    <a href="#" className="boxed-btn3-white-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>
            </div>
        );
    }
}

export default AboutUs;