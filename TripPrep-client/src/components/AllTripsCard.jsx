import { Link } from "react-router-dom";

function AllTripsCard ( { destination, country, season, _id } ) {

  return (                                      // add image to this card
      <Link to={`/trips/${_id}/packlist`}>
        <div className="border rounded">
          <h3>{country}</h3>
          <h5>{destination}</h5>
          <h5>{season}</h5>
        </div>
      </Link>
  );
}

export default AllTripsCard;
