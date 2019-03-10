// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import classes from './App.css';
// eslint-disable-next-line
import { BrowserRouter, Route } from 'react-router-dom'
import About from './containers/websitePages/About/About';
import LandingPage from './containers/websitePages/LandingPage/LandingPage';
// import RecepiesDiv from './containers/websitePages/Recepies/Recepies';
import { Row, Col } from 'reactstrap';
// import { DB_CONFIG }from './config/config';
// import firebase from 'firebase/app'
import AdminPage from './containers/websitePages/Admin/Admin';
// eslint-disable-next-line
import AddRecepies from './containers/websitePages/Admin/AddRecepie/AddRecepie';
import RecepiesPage from './containers/websitePages/RecepiesAll/RecepiesAllView';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      recepies : []
    }
  }

  render() {
    return(
        <BrowserRouter>
          <div className={classes.Component}>
              <Row>
                <Col>
                  <Route path="/" exact component={LandingPage}></Route>
                  <Route path="/about" exact component={About}></Route>
                  {/* <Route path="/recepies" exact component={RecepiesDiv}></Route> */}
                  <Route path="/admin" exact component={AdminPage}></Route>
                  <Route path="/recepies/:id" exact component={RecepiesPage}/>
                  
                </Col>
              </Row>
            
          </div>
        </BrowserRouter>
        );
      }
}

export default App;
