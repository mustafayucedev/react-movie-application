import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "styles/tailwind.css";

import { BrowserRouter } from 'react-router-dom';
import Routes from "routes/Routes"
import MovieProvider from "context/movie"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
        <Routes />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);