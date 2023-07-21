import { Link } from "react-router-dom";


function ListCard(props) {
  console.log('props here!', props);
  return (
    <>
      <Link to={`/trips/${props._id}/lists/todo`}>
        <h5> To Do </h5>
      </Link>

      <Link to={`/trips/${props._id}/lists/tobuy`}>
        <h5> To Buy </h5>
      </Link>

      <Link to={`/trips/${props._id}/lists/topack`}>
        <h5> To Pack </h5>
      </Link>
    </>
  )
}

export default ListCard;
