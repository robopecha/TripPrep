import { Link } from "react-router-dom";

function ListCard({ list }) {
  const { toDo, toBuy, toPack } = list;

  return (
    <>
      <Link to={`/trips/:id/lists/todo`}>
        <h5> To Do </h5>
      </Link>

      <Link to={`/trips/:id/lists/tobuy`}>
        <h5> To Buy </h5>
      </Link>

      <Link to={`/trips/:id/lists/topack`}>
        <h5> To Pack </h5>
      </Link>
    </>
  )
}

export default ListCard;
