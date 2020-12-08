import React from 'react';

function Header(props){
 return(
   <>
   <p>Header</p>
   <p>{props.children}</p>
   </>
 )
}

export default Header;