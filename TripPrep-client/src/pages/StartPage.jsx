import React from "react";
import { PiSuitcase } from 'react-icons/pi';


function StartPage() {

  return (
    <div className='relative w-screen h-screen bg-red-500 overflow-hidden'>
      <div
        className='absolute bg-yellow-400 rounded-full w-[700px] h-[700px]'
        style={{ top: '10%', left: '5%' }}
      ></div>
      <div className="text-[40rem] absolute z-20">
        <PiSuitcase />
      </div>

    </div>
  );
}


export default StartPage;
