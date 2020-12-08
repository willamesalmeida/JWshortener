import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';

import ShortenerService from '../../services/shortenerService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StatsContainer, StatsBox, StatsRow, StatsBoxTitle } from './sytles';

class StatsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      shortenedURL: {},
      errorMessage: '',

    }
  }

  render() {
    const { errorMessage, shortenedURL } = this.state;
    return (
      <Container>
        <Header>Estatísticas</Header>
        { errorMessage ? (
          <StatsContainer className="text-center">
            <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
            <p className="m-3"> {errorMessage} </p>
            <a className="btn btn-primary" href="/">Encurtar nova URL</a>
          </StatsContainer>

        ) : (
            <StatsContainer className="text-center">
              <p><b>https://jwshortener.tk/{shortenedURL.code}</b></br></p>
            </StatsContainer>
          )}
      </Container>
    )
  }

} export default StatsPage;