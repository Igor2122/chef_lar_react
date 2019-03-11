import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class FormElement extends Component {

  
   generateFrom = (type, name, placeholderValue, func, label) => {
     console.log(this.props);
     let form = null;
      switch (type) {
        case 'text':
        form = (<FormGroup>
                    <Label for={name}>{label}</Label>
                      <Input onChange={func} type={type} name={name} placeholder={placeholderValue} />
                  </FormGroup>
        );
        return form;
        // break;
    
      default:
        break;
    }
  }

  render() {
    let output = this.generateFrom(this.props.type, this.props.name, this.props.placeholder, this.props.func, this.props.label);
    return (
      <Form onSubmit={this.getInputValues}>
        <FormGroup>
        <p>hello</p>
          {output}
        </FormGroup>
      <Button onClick={this.props.subValues} >Submit</Button>
      </Form>
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



