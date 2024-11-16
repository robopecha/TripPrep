import React from 'react';


function Header({ className = '', children }) {

  return (
    <h3 className={`text-4xl my-7 ${className}`}>{ children }</h3>
  )
}


export default Header;

