import React from "react";
import { PiSuitcase } from 'react-icons/pi';


function StartPage() {

  return (
    <div className='bg-red-500 relative'>
      <div className='bg-yellow-400 rounded-full w-full h-full relative z-10'></div>
      <div className="text-[40rem] flex justify-center items-center absolute z-20">
        <PiSuitcase />
      </div>

    </div>
  );
}


export default StartPage;
