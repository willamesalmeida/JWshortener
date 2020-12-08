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

  render(){
    return(
      <Container>
        <Header>Seu novo encurtador de URL. :)</Header>
        <ContentContainer>
          <Form>
            <InputGroup>
              <FormControl 
                placeholder="Digite a URL que deseja encurtar"
                defaultValue=""
                onChange={e => this.setState({})}
              />
            </InputGroup>
          </Form>
        </ContentContainer>
      </Container>
    )
  }
}

export default HomePage;