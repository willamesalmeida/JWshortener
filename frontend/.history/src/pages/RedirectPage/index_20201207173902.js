import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ShortenedService from '../../services/shortenerService';


class  RedirectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      url: '',
      errorMessage: '',
    }
  }

  async componentDidMount() {
    const { code } = this.state.code
  }

  render(){
    return(
      <Container>
        <Header>Redirecionando</Header>
      </Container>
    )
  }

}export default RedirectPage;