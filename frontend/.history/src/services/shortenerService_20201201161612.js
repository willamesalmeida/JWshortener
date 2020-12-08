import baseApi from './api';

class ShortenerService {
  constructor(){
    this.api = baseApi('http://localhost:3001');
  }

  async getLink(code){
    const result = await  this.api.get(`Link/${code}`);

    return result.data;
  }
}