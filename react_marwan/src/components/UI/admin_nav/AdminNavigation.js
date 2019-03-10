import React from 'react';
import {Link} from 'react-router-dom';

export default class Example extends React.Component {

  
  render() {


    return (
      <nav>
        <ul>
          
          <li>
            <Link to={{
              pathname: '/admin/new_post'
            }}>Add Recepie</Link>
          </li>
        </ul>
      </nav>
    );
  }
}