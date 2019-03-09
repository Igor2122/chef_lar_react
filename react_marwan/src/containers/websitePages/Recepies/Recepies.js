import React, {Component} from 'react'
import Recepie from '../../../components/Recepie/Recep';
import classes from './Recepies.css';
import axios from 'axios';
import Loader from '../../../components/UI/Spinner/Spinner';

class RecepiesPage extends Component {

  state = {
    recepies: null
  }

  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/api/recepies')
      .then(response => {
        // console.log(response);
        this.setState({recepies: response.data})
        console.log(this.state.recepies)
      });
  }

  render() {

    let recepie = <Loader />;
     if(this.state.recepies){
      recepie = this.state.recepies.map(res => {
            console.log(res);
            return  <div>
                      <Recepie 
                        title={res.title} 
                        directions={res.directions}
                        />
                    </div>
          })
     }

    return (
      <div className={classes.RecepiesDiv}>
        <h1>Suggested Recepies:</h1>
        {recepie}
      </div>
    );
  }
}

export default RecepiesPage;