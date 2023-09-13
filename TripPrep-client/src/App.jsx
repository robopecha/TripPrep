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
// import AboutPage from "./pages/AboutPage";
//import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className="App font-ocr">
      <Navbar />
      <TripContextProvider>
        <Routes>
          <Route path="/" element={<AllTripsPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          <Route path="/trips/:tripID/packlist" element={<ShowPackListPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/new-trip" element={<IsPrivate><NewTripPage /></IsPrivate>} />
          <Route path="/trips" element={<IsPrivate><MyTripsPage /></IsPrivate>} />
          <Route path="/trips/:tripID" element={<IsPrivate><MyTripDetailsPage /></IsPrivate>} />
          <Route path="/trips/:tripID/edit" element={<IsPrivate><MyTripEditPage /></IsPrivate>} />
          <Route path="/trips/:tripID/lists/todo" element={<IsPrivate><ListDoPage /></IsPrivate>} />
          <Route path="/trips/:tripID/lists/tobuy" element={<IsPrivate><ListBuyPage /></IsPrivate>} />
          <Route path="/trips/:tripID/lists/topack" element={<IsPrivate><ListPackPage /></IsPrivate>} />
          <Route path="/trips/:tripID/lists/packmode" element={<IsPrivate><PackModePage /></IsPrivate>} />
          <Route path="/trips/:tripID/lists/success" element={<IsPrivate><SuccessPage /></IsPrivate>} />
          {/* <Route path="/settings" element={<IsPrivate><SettingsPage /></IsPrivate>} /> */}
          <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
          <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        </Routes>
      </TripContextProvider>
    </div>
  );
}

export default App;
