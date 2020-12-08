import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';

import ShortenerService from '../../services/shortenerService';

import { parseISO, formatRealtive } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

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
  async componentDidMount(){
    const { code } = this.props.match.params;

    try {
      const service = new ShortenerService();
      const shortenedURL = await service.getStats(code);

      const parseISO = parseISO(shortenedURL.updatedAt);

      this.setState({ isLoading: false, shortenedURL })
      
    } catch (error) {

      this.setState({ isLoading: false, errorMessage: 'Ops, a URL solicitada não existe' })
      
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
              <p><b>https://jwshortener.tk/{shortenedURL.code}</b></p>
              <p>Redireciona para: <br/>{ shortenedURL.url }</p>
              <StatsRow>
                <StatsBox>
                  <b>{ shortenedURL.hits }</b>
                  <StatsBoxTitle>Visita</StatsBoxTitle>
                </StatsBox>
                <StatsBox>
                  <b>{ shortenedURL.relativeDate }</b>
                  <StatsBoxTitle>Ultima visita</StatsBoxTitle>
                </StatsBox>
              </StatsRow>
              <a href="/" className="btn btn-primary"> Encurtar nova URL</a>
            </StatsContainer>
          )}
      </Container>
    )
  }

} export default StatsPage;