import { useState } from "react";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import CoinDetails from "./pages/CoinDetails";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/coin/:id" element={<CoinDetails />} />
    </Routes>
    </>
  );
}

export default App;
