import React from 'react';
import { Row, Col } from 'reactstrap';
import Image from 'react-image';
import Spinner from '../../components/UI/Spinner/Spinner';

const recepies = (props) => {
    // console.log(props.ingredients, typeof props.ingredients);

    const ingredients = props.ingredients.split(',');
    ingredients.pop();
    console.log(ingredients)
    
    let li = '';
    li = ingredients.map((element, i) => {
        return (
            <li key={i}>{element}</li>
        )
    }
        
        
    );
    return (
        
        <>
            <h3 className="my-5">{props.title}</h3>
            <Row>
                <Col md="6">
                    <ul>
                        {/* list of ingredients */}
                        {li}
                    </ul>
                </Col>
                <Col md="6">
                    <Image
                        src={[
                        props.image
                        ]}
                        loader={<Spinner/>}
                    />
                </Col>
                <p>{props.directions}</p>
            </Row>
        </>
    );
}

export default recepies;