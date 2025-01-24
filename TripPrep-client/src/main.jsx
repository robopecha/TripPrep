import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth.context";
import { TripProvider } from "./context/trip.context";
import { ItemProvider } from "./context/item.context";

const root = createRoot(document.querySelector('#root'));

root.render(
    <Router>
      <AuthProvider>
        <TripProvider>
          <ItemProvider>
           <App />
          </ItemProvider>
       </TripProvider>
      </AuthProvider>
    </Router>
);
