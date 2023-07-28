import { Link } from "react-router-dom";

function AllTripsCard ( { destination, country, season, _id, user } ) {

  return (                                      // add image to this card
      <Link to={`/trips/${_id}/packlist`}>
        <div className="rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200 bg-yellow-400 text-center">
          <h3>{country}</h3>
          <h5 className="text-xl font-bold">{destination}</h5>
          <h5>{season}</h5>
        </div>
      </Link>
  );
}

export default AllTripsCard;
