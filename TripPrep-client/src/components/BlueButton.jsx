import React from 'react';


function BlueButton({ type, className = '', onClick, children, ...delegated }) {

  return (
    <button
      type={type}
      className={`bg-blue-500 p-2 border-2 border-white rounded-sm hover:border-black transition ease-in-out duration-200 ${className}`}
      onClick={onClick}
      {...delegated}
    >
      {children}
    </button>
  );
}


export default BlueButton;
