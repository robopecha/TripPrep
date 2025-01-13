import React from 'react';


function BlueButton({ className = '', children, ...delegated }) {

  return (
    <button
      {...delegated}
      className={`bg-blue-500 p-2 border-2 border-white rounded-sm hover:border-black transition ease-in-out duration-200 ${className}`}
    >
      {children}
    </button>
  );
}


export default BlueButton;
