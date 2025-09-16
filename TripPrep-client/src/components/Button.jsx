import React from 'react';


function Button({ className = '', children, ...delegated }) {

  return (
    <button
      {...delegated}
      className={className}
    >
      {children}
    </button>
  );
}


export default Button;
