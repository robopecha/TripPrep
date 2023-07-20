import { Link } from "react-router-dom";

function TripCard ( { destination, country, season, _id } ) {

  return (
      <Link to={`/trips/${_id}`}>
        <h3>{country}</h3>
        <h5>{destination}</h5>
        <h5>{season}</h5>
      </Link>
  );
}

export default TripCard;
