import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';

import ShortenerService from '../../services/shortenerService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StatsContainer, StatsBox, StatsRow, StatsBoxTitle } from './sytles';

class  StatsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <p>StatsPage</p>
    )
  }

}export default StatsPage;