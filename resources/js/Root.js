import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Recepie from './containers/Recepies';
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
                    <Route path="/" exact component={Recepie}></Route>
                    <About path="/about" exact component={About}></About>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
