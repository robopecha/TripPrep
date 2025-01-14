import React from 'react';


function Header({ className = '', children }) {

  return (
    <h1 className={`text-4xl my-7 ${className}`}>{ children }</h1>
  )
}


export default Header;
