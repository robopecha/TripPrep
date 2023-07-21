import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import NewTripPage from "./pages/NewTripPage";
import TripsPage from "./pages/TripsPage";
import TripDetailsPage from "./pages/TripDetailsPage"
import { TripContextProvider } from "./context/trip.context";
import ListDoPage from "./pages/ListDoPage";
// import ListBuyPage from "./pages/ListBuyPage";
// import ListPackPage from "./pages/ListPackPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TripContextProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/new-trip" element={<NewTripPage />} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/trips/:tripID" element={<TripDetailsPage />} />
          <Route path="/trips/:tripID/lists/todo" element={<ListDoPage />} />
          {/* <Route path="/trips/:tripID/lists/tobuy" element={<ListBuyPage />} />
          <Route path="/trips/:tripID/lists/topack" element={<ListPackPage />} /> */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </TripContextProvider>
    </div>
  );
}

export default App;
