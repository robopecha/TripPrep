import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import { TripContextProvider } from "./context/trip.context";
import { ItemContextProvider } from "./context/item.context";

const root = createRoot(document.querySelector('#root'));

root.render(
    <Router>
      <AuthProviderWrapper>
        <TripContextProvider>
          <ItemContextProvider>
           <App />
          </ItemContextProvider>
       </TripContextProvider>
      </AuthProviderWrapper>
    </Router>
);
