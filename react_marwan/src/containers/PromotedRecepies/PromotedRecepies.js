import React, {Component} from 'react'
import Recepie from '../../components/Recepie/Recep';
import classes from './Recepies.css';
import axios from 'axios';
import Loader from '../../components/UI/Spinner/Spinner';
import { Container, CardDeck} from 'reactstrap';


class RecepiesPage extends Component {

  state = {
    recepies: null
  }

  componentDidMount() {
    console.log(this.props);
    axios
      .get('http://127.0.0.1:8000/api/recepies')
      .then(response => {
        this.setState({recepies: response.data})
        console.log(this.state.recepies)
      })
      .catch(err => console.log(err));
  }

  render() {

    let recepie = <Loader />;
     if(this.state.recepies){
        recepie = this.state.recepies.map(recepie => {
          // console.log(recepie.id);
              return  (<Recepie 
                          key={recepie.id}
                          title={recepie.title} 
                          image={recepie.image}
                          shortDescr={recepie.short_description}
                          updated={recepie.updated_at}
                          />)
            })
     }

    return (
      <div className={classes.RecepiesDiv}>
        <h1>Suggested Recepies:</h1>
        <Container>
          <CardDeck>
              {recepie}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default RecepiesPage;


