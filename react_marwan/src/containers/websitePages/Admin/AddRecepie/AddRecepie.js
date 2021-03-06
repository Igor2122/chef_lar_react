import React, {
    Component
} from 'react'
import AddRecepieForm from '../../../../components/UI/Input/forms/AddRecepieForm/AddRecepieForm';
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'reactstrap';
import axios from 'axios';
import fetch_categories from '../../../../axios_recepies/fetch_categories';


class AddRecepies extends Component {

    state = {
        formData: {
            title: 'One',
            short_description: 'One',
            image: 'one',
            directions: 'one',
            ingredients: 'one',
            category: 1,
            level: 1,
        },
        fromSettings: [{

                label: 'Recepie Name',
                type: 'text',
                name: 'title',
                placeholder: 'Enter Your Recepie Name'

            },
            {

                label: 'Short Description',
                type: 'text',
                name: 'categories_selection',
                placeholder: 'Category Select'

            },
            {

                label: 'Category Select',
                type: 'select',
                name: 'category',
                placeholder: 'Recepie Short Description'

            },
            {

                label: 'Add Image Url',
                type: 'text',
                name: 'image',
                placeholder: 'Add your Image'

            },
        ],

    }



    componentDidMount() {
        fetch_categories()
            .then(category => {
                this.setState({
                    ...this.state,
                    db_categories: category.data
                });
                console.log(this.state.db_categories);
            })
            .then(error => console.log(error));
    }

    getInputValues = e => {
        e.preventDefault();
        console.log('clicked');
    }

    handleChange = e => {
        switch (e.target.name) {
            case 'title':
                this.setState({
                    formData: {
                        ...this.state.formData,
                        title: e.target.value
                    }
                });
                break;
            case 'short_description':
                console.log(e.target.value);
                this.setState({
                    formData: {
                        ...this.state.formData,
                        short_description: e.target.value
                    }
                });
                break;
            case 'category':
                console.log(e.target.value);
                this.setState({
                    formData: {
                        ...this.state.formData,
                        category: e.target.value
                    }
                });
                break;

            default:
                break;
        }
        
    }

    handlePost = e => {
        console.log('clicked');
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/recepies', this.state.formData)
            .then(result => console.log(result))
            .catch(err => console.log(err));
        console.log(this.state.formData, typeof this.state.formData);
    }



    render() {
        console.log(this.state);

        let form = null
        form = this.state.fromSettings.map(result => {
            // console.log(result);
            return ( <AddRecepieForm 
                  key = {result.name}
                  type = {result.type}
                  name = {result.name}
                  placeholder = {result.placeholder}
                  label = {result.label}
                  func = {this.handleChange}
                  subValues = {this.handlePost}
                  categories = {this.state.db_categories}
            />
            )
        });

        return ( 
        <Container>
            <Row>
              <Col md="4">
                <h1> Add Recipe Form </h1> 
              </Col> 
              <Col md="8">
                <Form onSubmit = {this.getInputValues} > 
                  {form}
                  <Button > Submit </Button> 
                </Form> 
              </Col> 
            </Row> 
          </Container>
        );
    }
}

export default AddRecepies;
