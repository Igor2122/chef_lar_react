import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumboronCustom = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
        <div className="text-center"> 
          <h1 className="display-3">Wellcome to my page</h1>
          <p className="lead">Here you will find all my latest recepies that I careate with great passion and attention to detail</p>

        </div>
        
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumboronCustom;