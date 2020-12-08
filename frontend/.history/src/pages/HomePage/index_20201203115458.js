import React from 'react';
import { Container, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import Header from '../../components/Header';
import { ContentContainer, form } from './styles';


class  HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Container>
        <Header>Seu novo encurtador de URL. :)</Header>
      </Container>
    )
  }
}

export default HomePage;