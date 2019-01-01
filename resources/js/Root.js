import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home';
import About from './containers/About';
import Navigation from './components/Navigation/Navigation';


export default class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <Navigation />
                    </div>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about"  component={About}></Route>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
