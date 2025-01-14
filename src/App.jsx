import React from "react";
import "./css/App.css";
import Home from "./Pages/home";
import Favourites from "./Pages/favourites";
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
        </Routes>
      </main>
    </MovieProvider>
  );
}
