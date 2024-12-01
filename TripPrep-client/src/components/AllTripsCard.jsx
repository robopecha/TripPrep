import React from "react";
import { Link } from "react-router-dom";


function AllTripsCard ({ trip }) {

  return (
      <Link to={`/trips/${trip?._id}/packlist`}>
        <div className="rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200 bg-yellow-400 text-center">
          <h3>{trip?.country}</h3>
          <h5 className="text-xl font-bold">{trip?.destination}</h5>
          <h5>{trip?.season}</h5>
        </div>
      </Link>
  );
}


export default AllTripsCard;
