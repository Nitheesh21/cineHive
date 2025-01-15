import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "./css/App.css";
import Home from "./Pages/home";
import Favourites from "./Pages/favourites";
import Watchlater from "./Pages/watchlater";
import { MovieProvider } from "./contexts/MovieContext";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
export default function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/watchlater" element={<Watchlater />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}
