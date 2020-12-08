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
    const { code } = this.props.match.params;

    try {
      const service = new ShortenedService();
      const result = await service.getLink(code);
      
      console.log(result)
      window.location = result.url;

    } catch (error) {
      this.setState({ isLoading: false, errorMessage:'Ops, a url solicitada não existte' })
    }
  }

  render(){
    return(
      <Container>
        <Header>Redirecionando</Header>
      </Container>
    )
  }

}export default RedirectPage;