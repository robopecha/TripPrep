import React from "react";
import { PiSuitcase } from 'react-icons/pi';


// under construction


function StartPage() {

  return (
    <div className='relative fixed top-0 left-0 w-full bg-red-500 pt-16 h-[calc(100vh-4rem)]'>
      <div
        className='absolute bg-yellow-400 rounded-full w-[600px] h-[600px]'
        style={{ top: '0%', left: '5%' }}
      ></div>
      <div className="text-[40rem] absolute z-20">
        <PiSuitcase />
      </div>

    </div>
  );
}


export default StartPage;
