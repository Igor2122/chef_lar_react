import React, {Component} from 'react'
import Navigaton from '../../Navigation/Navigation';
// eslint-disable-next-line
import {BrowserRouter, Route} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import AdminNavigation from './AdminNavigation/AdminNavigation';
import AddRecepies from './AddRecepie/AddRecepie';

class AdminPage extends Component {

  render() {
    let spacer = {
      height: '200px'
    }
    return (
      <div>
        <Navigaton/>
        <Container>
          <Row>
            <Col xs='3'>
              <div style={spacer}></div>
              <AdminNavigation/>
            </Col>
            <Col xs='9'>
              <Route path="/admin/new_post" component={AddRecepies}/> {/* <Route path="/admin/all_recepies" component={AddRecepies}/> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminPage;