import React, {Component} from 'react'
import Navigation from '../../Navigation/Navigation';
import BackgroundSlider from '../../../components/imageSliders/backgroundSlider/backgroundSlider';
import Jumbotron from '../../../components/UI/Jumbotron/Jumbotron';
import classes from './LandingPage.css';
import Recepies from '../../PromotedRecepies/PromotedRecepies';

class Landing extends Component {

  state = {
    stickyNav: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = () => {
    let y = window.pageYOffset;
    if (y > 758) {
      this.setState({stickyNav: true});
    } else {
      this.setState({stickyNav: false})
    }
  }

  render() {

    let styleNav = {
      background: 'red'
    }

    let nav = <Navigation/>;
    if (this.state.stickyNav) {
      nav = <Navigation style={styleNav} fixed={'top'}/>
    } else {
      nav = <Navigation/>
    }
    return (
      <div className={classes.HomeUpper}>
        <div className={classes.Carusel}>
          <BackgroundSlider/>
        </div>
        {nav}
        <Jumbotron/>
        <Recepies />
      </div>
    );
  }
}

export default Landing;