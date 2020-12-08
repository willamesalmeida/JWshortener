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

  render(){
    return(
      <Container>
        <Header>Estatísticas</Header>
        { errorMessage ? (
          <StatsContainer>
            <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
          </StatsContainer>

        ) : (

        ) }
      </Container>
    )
  }

}export default StatsPage;