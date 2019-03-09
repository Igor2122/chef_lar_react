import React from 'react';
import Carousel from 'react-image-carousel';
import classes from './Carusel.css';
 
 

const carusel = ( props ) => {
  let images = [
    'https://images.pexels.com/photos/1729541/pexels-photo-1729541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1146242/pexels-photo-1146242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1029618/pexels-photo-1029618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1095826/pexels-photo-1095826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

return (
  <div className={classes.Carusel}>
            <Carousel images={images} 
                        thumb={true}
                        loop={true}
                        autoplay={3000}/>
        </div>
);
}

 

export default carusel;