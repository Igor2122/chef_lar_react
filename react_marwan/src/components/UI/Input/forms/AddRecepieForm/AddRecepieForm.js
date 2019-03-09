import React, {Component} from 'react'
// import classes from './AddRecepie.css';

import {
  FormGroup,
  Label,
  Input,
  // eslint-disable-next-line
  FormText,
  Container
} from 'reactstrap';

class AddRecepie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isShow: true
    };
  }

  render() {

    let inputElent = null;

    switch (this.props.inputtype) {
      case('input'):
        inputElent = <Input {...this.props} />
        break;
      case('text-area'):
        inputElent = <Input {...this.props} />
        break;
      case('select'):
        inputElent = <Input {...this.props} >
          <option>Soup</option>
          <option>Snack</option>
          <option>Main Course</option>
          <option>Dessert</option>
        </Input>
        break;

      default:
        inputElent = <input {...this.props} />
    }

    return (
      <div>
        <Container>
            <FormGroup>
              <Label for="exampleEmail">{this.props.label}</Label>
              {inputElent}
            </FormGroup>
        </Container>
      </div>
    );
  }
}

export default AddRecepie;