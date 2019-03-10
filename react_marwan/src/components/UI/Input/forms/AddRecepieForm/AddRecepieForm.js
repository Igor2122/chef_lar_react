import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class FormElement extends Component {

  constructor(props) {
    super(props);
    
    // this.handleClick = this.handleClick.bind(this);
  }
   generateFrom = (type) => {
     console.log(this.props);
     let form = null;
      switch (type) {
        case 'text':
        form = (<FormGroup>
          <Label for="recep_name">Recepie Name</Label>
            <Input onChange={this.handleChange} type="text" name="recepie_name" placeholder="Enter Recepie Name" />
        </FormGroup>)
        return form;
        break;
    
      default:
        break;
    }
  }

  render() {
    let output = this.generateFrom('text');
    return (
      <FormGroup>
      <p>hello</p>
        {output}
        {output}
    </FormGroup>
    );
  }
}


export default FormElement ;


// <Form onSubmit={this.getInputValues}>
        
//         <FormGroup>
//           <Label for="recep_name">Recepie Directions</Label>
//           <Input onChange={this.handleChange} type="text" name="directions" placeholder="with a placeholder" />
//         </FormGroup>
//         <FormGroup>
//           <Label for="exampleSelect">Select</Label>
//           <Input type="select" name="select" id="exampleSelect">
//             <option>1</option>
//           </Input>
//         </FormGroup>
//         <FormGroup>
//           <Label for="exampleText">Text Area</Label>
//           <Input type="textarea" name="text" id="exampleText" />
//         </FormGroup>
//         <FormGroup>
//           <Label for="exampleFile">File</Label>
//           <Input type="file" name="file" id="exampleFile" />
//           <FormText color="muted">
//             This is some placeholder block-level help text for the above input.
//             It's a bit lighter and easily wraps to a new line.
//           </FormText>
//         </FormGroup>
//         <FormGroup tag="fieldset">
//           <legend>Radio Buttons</legend>
//           <FormGroup check>
//             <Label check>
//               <Input type="radio" name="radio1" />{' '}
//               Option one is this and that—be sure to include why it's great
//             </Label>
//           </FormGroup>
//           <FormGroup check>
//             <Label check>
//               <Input type="radio" name="radio1" />{' '}
//               Option two can be something else and selecting it will deselect option one
//             </Label>
//           </FormGroup>
//           <FormGroup check disabled>
//             <Label check>
//               <Input type="radio" name="radio1" disabled />{' '}
//               Option three is disabled
//             </Label>
//           </FormGroup>
//         </FormGroup>
//         <FormGroup check>
//           <Label check>
//             <Input type="checkbox" />{' '}
//             Check me out
//           </Label>
//         </FormGroup>

//         <Button>Submit</Button>
//       </Form>
//     );
//   }
// }



