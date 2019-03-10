import React, {Component} from 'react'
import AddRecepieForm from '../../../../components/UI/Input/forms/AddRecepieForm/AddRecepieForm';
import {Container, Row, Col} from 'reactstrap';


class AddRecepies extends Component {

  state = {
    formData: {
      title: null,
      short_description: null,
      image: null,
      directions: null,
      ingredients: null,
      category: null,
      level: null,
    }, 
    fromSettings: {
      recep_name: {
        type: 'text',
        name: 'title',
        placeholder: 'Enter Your Recepie Name'
      },
      short_description: 'text',
      image: 'text',
      directions: 'textarea',
      ingredients: 'textarea',
      category: 'select',
      level: 'select',
    }
  }

  getInputValues = e => {
    e.preventDefault();
    console.log('clicked');
  }
  
  handleChange = e => {
    console.log(e.target.name)
    switch (e.target.name) {
      case 'title':
          this.setState({name: e.target.value});
        break;
      case 'directions':
          this.setState({name: e.target.value});
        break;

      default:
        break;
    }
    console.log(this.state);
  }

  

  render() {
  
    
    
    return (
      <Container>
      <Row>
        <Col md="4">
          <h1>Add Recipe Form</h1>
        </Col>
        <Col md="8">
          <AddRecepieForm type={this.state.fromSettings.recep_name.type} 
          name = {this.state.fromSettings.recep_name.name}placeholder = {this.state.fromSettings.recep_name.placeholder}
            func={this.handleChange}
          />
        </Col>
      </Row>
      </Container>
    );
  }
}

export default AddRecepies;