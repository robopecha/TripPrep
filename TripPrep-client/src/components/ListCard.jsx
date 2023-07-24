import { Link } from "react-router-dom";


function ListCard(props) {

  return (
    <div className="text-center my-10">
      <Link to={`/trips/${props._id}/lists/todo`}>
        <button className="rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200 bg-yellow-400 text-center w-60 py-1 text-xl"> To Do </button>
      </Link>
      <br />
      <br />
      <Link to={`/trips/${props._id}/lists/tobuy`}>
      <button className="rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200 bg-yellow-400 text-center w-60 py-1 text-xl"> To Buy </button>
      </Link>
      <br />
      <br />
      <Link to={`/trips/${props._id}/lists/topack`}>
      <button className="rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200 bg-yellow-400 text-center w-60 py-1 text-xl"> To Pack </button>
      </Link>
    </div>
  )
}

export default ListCard;
