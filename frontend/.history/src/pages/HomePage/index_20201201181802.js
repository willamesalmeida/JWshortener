import React from 'react';
import { container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class  HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <container>
        <FontAwesomeIcon inco="check-square"/>
        HomePage
      </container>
    )
  }

}export default HomePage;