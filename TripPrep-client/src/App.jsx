import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import NewTripPage from "./pages/NewTripPage";
import AllTripsPage from "./pages/AllTripsPage";
import ShowPackListPage from "./pages/ShowPackListPage"
import MyTripsPage from "./pages/MyTripsPage";
import MyTripDetailsPage from "./pages/MyTripDetailsPage"
import MyTripEditPage from "./pages/MyTripEditPage"
import { TripContextProvider } from "./context/trip.context";
import ListDoPage from "./pages/ListDoPage";
import ListBuyPage from "./pages/ListBuyPage";
import ListPackPage from "./pages/ListPackPage";
import PackModePage from "./pages/PackModePage";
import SuccessPage from "./pages/SuccessPage";
import SearchPage from "./pages/SearchPage";
//import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className="App font-ocr">
      <Navbar />
      <TripContextProvider>
        <Routes>
          <Route path="/" element={<AllTripsPage />} />
          <Route path="/new-trip" element={<NewTripPage />} />
          <Route path="/trips/:tripID/packlist" element={<ShowPackListPage />} />
          <Route path="/trips" element={<MyTripsPage />} />
          <Route path="/trips/:tripID" element={<MyTripDetailsPage />} />
          <Route path="/trips/:tripID/edit" element={<MyTripEditPage />} />
          <Route path="/trips/:tripID/lists/todo" element={<ListDoPage />} />
          <Route path="/trips/:tripID/lists/tobuy" element={<ListBuyPage />} />
          <Route path="/trips/:tripID/lists/topack" element={<ListPackPage />} />
          <Route path="/trips/:tripID/lists/packmode" element={<PackModePage />} />
          <Route path="/trips/:tripID/lists/success" element={<SuccessPage />} />
          <Route path="/search" element={<SearchPage />} />
          {/* <Route path="/settings" element={<SettingsPage />} /> */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </TripContextProvider>
    </div>
  );
}

export default App;
