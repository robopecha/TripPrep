import { Link } from "react-router-dom";

function TripCard ( { destination, country, season, _id } ) {

  return (
      <Link to={`/trips/${_id}`}>
        <div className="rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200 bg-yellow-400 text-center">
          <h3>{country}</h3>
          <h5 className="text-xl font-bold">{destination}</h5>
          <h5>{season}</h5>
        </div>
      </Link>
  );
}

export default TripCard;
