import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/Header';


class  HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Container>
        <Header>Header constumizado</Header>
        <FontAwesomeIcon icon="check-square"/> HomePage
      </Container>
    )
  }
}

export default HomePage;