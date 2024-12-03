import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import StartPage from "./pages/StartPage";
import AllTripsPage from "./pages/AllTripsPage";
import AboutPage from "./pages/AboutPage";
import ShowPackListPage from "./pages/ShowPackListPage"
import SearchPage from "./pages/SearchPage";
import NewTripPage from "./pages/NewTripPage";
import MyTripsPage from "./pages/MyTripsPage";
import MyTripDetailsPage from "./pages/MyTripDetailsPage"
import MyTripEditPage from "./pages/MyTripEditPage"
import ListDoBuyPage from "./pages/ListDoBuyPage";
import ListPackPage from "./pages/ListPackPage";
import PackModePage from "./pages/PackModePage";
import SettingsPage from "./pages/SettingsPage";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";


function App() {

  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <div className="font-ocr">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<AllTripsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trips/:tripID/packlist" element={<ShowPackListPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/new-trip" element={<IsPrivate><NewTripPage /></IsPrivate>} />
        <Route path="/trips" element={<IsPrivate><MyTripsPage /></IsPrivate>} />
        <Route path="/trips/:tripID" element={<IsPrivate><MyTripDetailsPage /></IsPrivate>} />
        <Route path="/trips/:tripID/edit" element={<IsPrivate><MyTripEditPage /></IsPrivate>} />
        <Route path="/trips/:tripID/lists/todo" element={<IsPrivate><ListDoBuyPage listType={'do'} /></IsPrivate>} />
        <Route path="/trips/:tripID/lists/tobuy" element={<IsPrivate><ListDoBuyPage listType={'buy'} /></IsPrivate>} />
        <Route path="/trips/:tripID/lists/topack" element={<IsPrivate><ListPackPage /></IsPrivate>} />
        <Route path="/trips/:tripID/lists/packmode" element={<IsPrivate><PackModePage /></IsPrivate>} />
        <Route path="/:userID/settings" element={<IsPrivate><SettingsPage /></IsPrivate>} />
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
      </Routes>
    </div>
  );
}


export default App;
