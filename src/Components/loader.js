import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import App from "../App";
import  { Redirect } from 'react-router-dom'
import ReactDOM from "react-dom";

class Loader extends Component {
    componentDidMount(){
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(()=>{
            ReactDOM.render(
                <React.StrictMode>

                    <App />
                </React.StrictMode>,
                document.getElementById('root')
            );
        }, 5000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }

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