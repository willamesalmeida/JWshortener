import React from 'react';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';
import Header from '../../components/Header';
import { ContentContainer, Form } from './styles';
import ShortenerService from '../../services/shortenerService'

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      url: '',
      code: '',
      errorMessage: '',
    }
  }

  handleInputChange = e => {
    this.setState({ url: e.target.value });
  }

  HandleSubmit = async (event) => {
    event.preventDefault();//para evitar que seja feito o post do value e não carregar a pagina

    const { url } = this.state;

    this.setState({ isLoading: true, errorMessage: '' });

    if (!url) {

      this.setState({ isLoading: false, errorMessage: 'Informe uma URL para encurtar. ' });

    } else {

      try {

        const service = new ShortenerService();
        const result = await service.generate({ url });

        this.setState({ isLoading: false, code: result.code })

      } catch (error) {
        this.setState({ isLoading: false, errorMessage: 'Ops, ocorreu um erro ao tentar encurtar a URL.' })

      }
    }

  }

  render() {
    const { isLoading, errorMessage, code } = this.state;
    return (
      <Container>
        <Header>Seu novo encurtador de URL. :)</Header>
        <ContentContainer>
          <Form onSubmit={this.HandleSubmit}>
            <InputGroup>
              <FormControl
                placeholder="Digite a URL que deseja encurtar"
                defaultValue=""
                onChange={this.handleInputChange}
                valeu={this.state.url}
              />
              <InputGroup.Append>
                <Button variant="primary" type="submit">Encurtar</Button>
              </InputGroup.Append>
            </InputGroup>

            {isloading ? (
              <Spinner animation="border" />
            ) : (

                code && (
                  <>
                    <InputGroup>
                      <FormControl
                        autoFocus={true}
                        defaultValue={`https://jwshortener.tk/${code}`}
                        onChange={this.handleInputChange}
                        valeu={this.state.url}
                        ref={(input) => this.inputURL = input }
                      />
                      <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={ () => this.copyToClipboard() }>Copiar</Button>
                      </InputGroup.Append>
                    </InputGroup>
                    <p>Text</p>

                  </>


                )
              )}

          </Form>
        </ContentContainer>
      </Container>
    )
  }
}

export default HomePage;