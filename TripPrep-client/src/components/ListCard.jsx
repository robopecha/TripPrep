import { Link } from "react-router-dom";

function ListCard() {

  return (
    <>
      <Link to={`/trips/:id/lists/do`}>
        <h5> To Do </h5>
      </Link>

      <Link to={`/trips/:id/lists/buy`}>
        <h5> To Buy </h5>
      </Link>

      <Link to={`/trips/:id/lists/pack`}>
        <h5> To Pack </h5>
      </Link>
    </>
  )
}

export default ListCard;
