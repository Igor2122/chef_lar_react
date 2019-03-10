import React, {Component} from 'react'
import AddRecepieForm from '../../../../components/UI/Input/forms/AddRecepieForm/AddRecepieForm';
import {Container, Form} from 'reactstrap';
// eslint-disable-next-line
// import axios from '../../../../axios-recep-conn';

class AddRecepies extends Component {

  state = {
    name: null,
    cagegory: null,
    // instructions: null,
    addRecepieForm: {
      recepName: {
        configuration: {
          label: 'Recepie Name',
          inputtype: 'input',
          type: 'input',
          id: 'RecepieName',
          placeholder: 'Recepie Name',
          name: 'Recepie Name'
        },
        value: '',
      },
      SelectCategory: {
        configuration: {
          label: 'Select Category',
          inputtype: 'select',
          type: 'select',
          id: 'SelectCategory',
          placeholder: 'Select Category',
          name: 'SelectCategory'
        },
        value: '',
      },
      Instructions: {
        configuration: {
          label: 'Instructions',
          inputtype: 'text-area',
          type: 'textarea',
          id: 'Inscructions',
          placeholder: 'Insctruction shall come here',
          name: 'Inscructions'
        },
        value: '',
      },
      
    }
  }

  inputChangedHandler = (e, inputIndentifier) => {
    console.log(e.target.value );
    // eslint-disable-next-line
    const updatedOrderForm = {
      ...this.state.updatedOrderForm
    }

  }

  addRecepiesHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
  }

  render() {
    
    
    // const formIds = Object.keys(this.state.addRecepieForm)
    const formElements = Object.values(this.state.addRecepieForm);


    console.log(formElements);

    
    return (
      <div>

        <Form onSubmit={this.addRecepiesHandler}>
    
          <Container className="mt-5">
            <h1>Add New Recepies:</h1>
            {formElements.map((formElement, i) => (
              <AddRecepieForm 
              key={i}
              label={formElement.configuration.label}
              inputtype={formElement.configuration.inputtype}
              type={formElement.configuration.type}
              changed={this.inputChangedHandler}
              // eslint-disable-next-line
              inputtype={formElement.configuration.inputtype}
              />
            ))}
            {/* <AddRecepieForm
              label={'Recepie Name'}
              inputtype={'input'}
              type={'input'}
              id={'RecepieName'}
              placeholder={'Recepie Name'}
              name={'RecepieName'}/>
            <AddRecepieForm
              label={'Select Category'}
              inputtype={'select'}
              type={'select'}
              id={'SelectCategory'}
              placeholder={'Recepie Name'}
              name={'SelectCategory'}/>
            <AddRecepieForm
              label={'Instructions'}
              inputtype={'text-area'}
              type={'textarea'}
              id={'SelectCategory'}
              placeholder={'Recepie Name'}
              name={'Recepie Insctructions'}/> */}
            <input type="submit" value="Submit"/>
          </Container>
        </Form>
      </div>
    );
  }
}

export default AddRecepies;