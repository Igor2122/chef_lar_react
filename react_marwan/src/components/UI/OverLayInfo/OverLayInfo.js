import React, { Component } from 'react';
import classes from './OverLayInfo.css';
import Tags from '../../Tags/Tags'
import Img from 'react-image'
import HeartIcon from '../../../assets/svg/heartInsta.png'


class OverlayInfo extends Component {
    render () {

        return (
            <div className={[classes.Show, classes.InfoOverlay].join(' ')}
            style={{
                opacity: this.props.show ? '.85' : 0,
                cursor: 'pointer'
                }}>
        <div className={classes.LikesCommets}>
            <span className={classes.TipDown}></span>
            <div className={classes.InstaLikes}>
                <Img src={HeartIcon}/>
                <Tags type={'h3'} value={this.props.value} />
                
            </div>
        </div>
    </div>
    );
    }
}




export default OverlayInfo;

