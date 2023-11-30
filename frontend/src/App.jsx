import { useState } from "react";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import CoinDetails from "./pages/CoinDetails";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/coindetails" element={<CoinDetails />} />
    </Routes>
    </>
  );
}

export default App;
