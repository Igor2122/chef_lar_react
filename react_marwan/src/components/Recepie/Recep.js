import React from 'react';
import {
  Card, CardBody,
  //   Button,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap';
import classes from './Recep.css';

const Recepie = (props) => {
  return (
    <div>
      <Card className={classes.Card}>
        <CardImg top width="100%" src="/img/tram.jpeg" alt="Card image cap"/>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Recepie;