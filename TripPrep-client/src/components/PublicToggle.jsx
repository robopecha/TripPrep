import React from "react";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { mutate } from "swr";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


function PublicToggle({ trip }) {

  const [unlocked, setUnlocked] = React.useState(trip.public);

  function toggleClick() {
    setUnlocked(!unlocked);
  }

  React.useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const requestBody = { public: unlocked };
    axios
      .put(
        `${API_URL}/api/trips/${trip._id}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        mutate(`${API_URL}/api/trips`);
      })
      .catch((error) => console.log(error))

  }, [unlocked]);

  return (
    <>
      <div className='flex justify-center'>
        {trip.public ?
          <AiOutlineUnlock
            className='text-5xl mt-12 border-2 rounded-sm p-2 mb-3 bg-yellow-400 cursor-pointer border-white hover:border-black'
            onClick={toggleClick}
          /> :
          <AiOutlineLock
            className='text-5xl mt-12 border-2 rounded-sm p-2 mb-3 bg-yellow-400 cursor-pointer border-white hover:border-black'
            onClick={toggleClick}
          />
        }
      </div>
      <p className="text-center">This trip is {trip.public ? 'public' : 'private'}.</p>
    </>
  )
}


export default PublicToggle;
