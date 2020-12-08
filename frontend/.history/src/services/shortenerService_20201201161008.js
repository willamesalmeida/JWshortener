import baseApi from './api';

class ShortenerService {
  constructor(){
    this.api = baseApi('http://localhost:3001');
  }
}