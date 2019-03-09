import ScrollTrigger from 'react-scroll-trigger';
import React, { Component }  from 'react';


class MenuTrigger extends Component {

    
  onEnterViewport() {
    this.setState({
      visible: true,
    });
  }
 
  onExitViewport() {
    this.setState({
      visible: false,
    });
  }
 
  render() {
    
 
    return (
        <div>
            <ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport}>
                {console.log('I am visible')}
            </ScrollTrigger>
        </div>
    );
  }
}


export default MenuTrigger;