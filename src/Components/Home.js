import React, {Component} from 'react';
import Slideshow from "./slideshow";
import NewArrival from "./newArrival";

class Home extends Component {
    render() {
        return (
            <div>
                <Slideshow/>
                <NewArrival/>
            </div>
        );
    }
}

export default Home;