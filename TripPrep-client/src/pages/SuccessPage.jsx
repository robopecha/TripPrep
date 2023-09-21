import { useParams, Link } from "react-router-dom";

function SuccessPage() {
  const {tripID} = useParams();

  return (
    <div className="flex justify-center mt-40 text-center">
      <div className="text-center">
        <h1 className="text-4xl text-green-600 my-6 border-yellow-400 border-8 rounded-md p-8 block mb-20">Success! You're all packed! Let's go!</h1>
      <Link to={`/trips/${tripID}/lists/packmode`} className="bg-blue-500 p-2 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200">Go back</Link>
      </div>
    </div>
  );
}

export default SuccessPage;
