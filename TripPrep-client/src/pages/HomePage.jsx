import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/alltrips" className="text-4xl my-6">Trip Prep</Link>   {/* logo */}
    </div>
  );
}

export default HomePage;
