import { Link } from "react-router-dom";


function ListCard(props) {

  return (
    <>
      <Link to={`/trips/${props._id}/lists/todo`}>
        <button> To Do </button>
      </Link>
      <br />
      <br />
      <Link to={`/trips/${props._id}/lists/tobuy`}>
      <button> To Buy </button>
      </Link>
      <br />
      <br />
      <Link to={`/trips/${props._id}/lists/topack`}>
      <button> To Pack </button>
      </Link>
    </>
  )
}

export default ListCard;
