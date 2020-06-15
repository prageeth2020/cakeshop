import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class Loader extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <img className="" src={require('./Images/5.gif')} alt="Card image cap"/>

                </header>
            </div>
        );
    }
}

export default Loader;