import React from 'react';


const heading = (props) => {
    switch (props.type) {
        case 'h1':
            return (
                <h1>{props.value}</h1>
            );
        case 'h2': 
            return (
                <h2>{props.value}</h2>
            )
        
        default:
            return (
                <h3>{props.value}</h3>
            );
    }
};

export default heading;