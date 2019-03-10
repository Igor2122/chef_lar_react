import React, {Component} from 'react'
import RecepieCard from '../../../components/Recepie/Recep';
import RecepieLarge from '../../../components/RecepiesFullPage/RecepieFullPage';
import fetchRecepies from  '../../../axios-recepies';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Navigation from '../../Navigation/Navigation';
import { Container, Row, Col } from 'reactstrap';



class AllRecepies extends Component {

    state = {
        recepie: null,
    }

    componentDidMount () {
        
        if(this.props.match.params.id){
            fetchRecepies.get(this.props.match.params.id)
            .then(recepie => {
                
                this.setState({recepie: recepie.data})
                // console.log(this.state.recepie)
                
            })
            .catch(err => console.log(err));
        }
    }

  render() {
    let selectedRec = null;
    selectedRec = <Spinner />
    if(this.state.recepie){
            selectedRec = <RecepieLarge 
                            key={this.state.recepie.id}
                            title={this.state.recepie.title}
                            ingredients={this.state.recepie.ingredients}
                            directions={this.state.recepie.directions}
                            image={this.state.recepie.image}
                        />
    } 

    return (
        <div>
            <Navigation />
            <Container>
                <Row>
                    <Col md="8">
                        {selectedRec}
                    </Col>
                    <Col md="4"><h1>Recommended</h1></Col>
                </Row>

            </Container>
        </div>
    );
  }
}

export default AllRecepies;


