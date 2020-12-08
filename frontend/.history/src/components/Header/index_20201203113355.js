import React from 'react';
import  { Logo, HeaderContainer } from './style';


function Header(props){
 return(
    <>
      <HeaderContainer>
        
        <Logo src={} alt='JWShortener - Encurtadoer de URL' />
        <h1>JWShortener</h1>
        <p>{props.children}</p>

      </HeaderContainer>
      
    </>
 )
}

export default Header;