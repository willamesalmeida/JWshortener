import React from 'react';
import { Container, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import Header from '../../components/Header';
import { ContentContainer, Form } from './styles';


class  HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoading: false,
      url: '',
      shortenerURL: '',
      errorMessage: '',
    }
  }

  handleInputChange = e =>{
    this.setState({ url: e.target.value });
  }

  HandleSubmit = async(event) =>{
    event.preventDefault();//para evitar que seja feito o post do value e não carregar a pagina
    
    const { url } = this.state;
    
    this.setState({ isLoading: true, errorMessage: '' });

    if(!url){
      this.state( { isLoading: false, errorMessage: 'Informe uma URL para encurtar. '});
    }

  }

  render(){
    return(
      <Container>
        <Header>Seu novo encurtador de URL. :)</Header>
        <ContentContainer>
          <Form onSubmit={ this.HandleSubmit }>
            <InputGroup>
              <FormControl 
                placeholder="Digite a URL que deseja encurtar"
                defaultValue=""
                onChange={ this.handleInputChange }
                valeu={ this.state.url }
              />
              <InputGroup.Append>
                <Button variant="primary" type="submit">Encurtar</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </ContentContainer>
      </Container>
    )
  }
}

export default HomePage;