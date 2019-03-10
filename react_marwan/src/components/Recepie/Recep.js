import React from 'react';
import {
  Card, CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button
} from 'reactstrap';
import classes from './Recep.css';
import { Link } from 'react-router-dom';


const Recepie = (props) => {
  
  return (
    <div>
    
      <Card className={classes.Card}>
        <CardImg top width="75%" src={props.image} alt="Card image cap"/>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.shortDescr}</CardText>
          <CardText>
            <small className="text-muted">{props.updated}</small>
          </CardText>
          <Button><Link to="/recepies/sample"> See Details</Link></Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Recepie;