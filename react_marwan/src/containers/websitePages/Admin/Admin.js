import React, {Component} from 'react'
import Navigation from '../../Navigation/Navigation';
// eslint-disable-next-line
import {BrowserRouter, Route} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
// import AdminNavigation from './AdminNavigation/AdminNavigation';
import AddRecepies from './AddRecepie/AddRecepie';
import AdminNavigation from '../../../components/UI/admin_nav/AdminNavigation';

class AdminPage extends Component {

  render() {
    let spacer = {
      height: '200px'
    }
    
    return (
      <div>
        <Navigation/>
        <Container>
          <Row>
            <Col xs='3'>
              <div style={spacer}></div>
              <AdminNavigation/>
            </Col>
            <Col xs='9'>
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default AdminPage;