import React, {Component} from 'react'
import Rcepie from '../../../components/Recepie/Recep';
import classes from './Recepies.css';
import axios from 'axios';
import Recepie from '../../../components/Recepie/Recep';

class RecepiesPage extends Component {

  state = {
    recepies: null
  }

  componentDidMount() {
    axios
      .get('https://marwannew-c69d8.firebaseio.com/recipes.json')
      .then(response => {
        console.log(response);
        this.setState({recepies: response.data})
      });
  }

  render() {

       let recepie = null;
     if(this.state.recepies){
          let all = Object.keys(this.state.recepies);
          console.log(all);
          // Object.values(this.state.recepies)
          // .map(rec => {
          //      console.log(rec)
          //      recepie = <Recepie name={rec.name} />
          // })
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