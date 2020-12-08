import React from 'react';
import  { Logo, HeaderContainer } from './style';
import Icone from '../../assets/icone.png';

function Header(props){
 return(
    <>
      <HeaderContainer>

        <Logo src={Icone} alt='J. W. Shortener - Encurtadoer de URL' />
        <h1>J.W.Shortener</h1>
        <p>{props.children}</p>

      </HeaderContainer>
      
    </>
 )
}

export default Header;