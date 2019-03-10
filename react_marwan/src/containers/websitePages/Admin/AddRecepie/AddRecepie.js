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
    fromSettings: [
      {
        recep_name: {
          label: 'Recepie Name',
          type: 'text',
          name: 'title',
          placeholder: 'Enter Your Recepie Name'
        },
      },
      {
        recep_name : {
        label: 'Short Description',
        type: 'text',
        name: 'short_description',
        placeholder: 'Recepie Short Description'
      }
     },
    ],
      image: 'text',
      directions: 'textarea',
      ingredients: 'textarea',
      category: 'select',
      level: 'select',
  }

  getInputValues = e => {
    e.preventDefault();
    console.log('clicked');
  }
  
  handleChange = e => {
    console.log(e.target.name)
    switch (e.target.name) {
      case 'title':
          this.setState({formData: {...this.state.formData, title: e.target.value}});
        break;
      case 'short_description':
          this.setState({short_description: e.target.value});
        break;

      default:
        break;
    }
    console.log(this.state);
  }

  

  render() {
  
    
    // console.log(this.state.fromSettings);
    let form = null
    form = this.state.fromSettings.map(res => {
       return (<AddRecepieForm 
                          type={res.recep_name.type} 
                          name = {res.recep_name.name}
                          placeholder = {res.recep_name.placeholder}
                          label={res.recep_name.label}
                          func={this.handleChange}
                    />)
    });
    return (
      <Container>
      <Row>
        <Col md="4">
          <h1>Add Recipe Form</h1>
        </Col>
        <Col md="8">
          {form}
        </Col>
      </Row>
      </Container>
    );
  }
}

export default AddRecepies;