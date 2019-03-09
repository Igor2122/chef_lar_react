import React, {Component} from 'react'
import Navigation from '../../Navigation/Navigation';
import BackgroundSlider from '../../../components/imageSliders/backgroundSlider/backgroundSlider';
import Jumbotron from '../../../components/UI/Jumbotron/Jumbotron';
import classes from './LandingPage.css';
import Waypoint from 'react-waypoint';
import Recepies from '../Recepies/Recepies';

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

    let styles = {
      height: '600px',
      background: 'yellow'
    }

    let style2 = {
      height: '600px',
      background: 'red'
    }

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
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}></Waypoint>
          <Recepies />
        <div style={styles}></div>
        <div style={style2}></div>
        <div style={styles}></div>
      </div>
    );
  }
}

export default Landing;