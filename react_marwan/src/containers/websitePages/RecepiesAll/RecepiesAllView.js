import React, {Component} from 'react'
import Recepie from '../../../components/Recepie/Recep';
import fetchRecepies from  '../../../axios-recepies';
import Navigation from '../../Navigation/Navigation';


class AllRecepies extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          recepId: null
        }
      }

    componentDidMount () {
        this.setState({recepId : 1});
        console.log(this.props);
        console.log(this.state.recepId);
        fetchRecepies.get(this.props.match.params.id)
        .then(recepie => {
            console.log(recepie)
            console.log(this.state);
        })
            .catch(err => console.log(err));
    }

  render() {
    
    return (
        <div>
            <Navigation />
            <h1>All Recepies will come here</h1>
            <Recepie />
        </div>
    );
  }
}

export default AllRecepies;


