import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { TripProvider } from "./context/TripProvider";
import { ItemProvider } from "./context/ItemProvider";

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
