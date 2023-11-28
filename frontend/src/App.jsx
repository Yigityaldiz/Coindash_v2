import { useState } from "react";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import CoinDetails from "./pages/CoinDetails";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coindetails" element={<CoinDetails />} />
    </Routes>
  );
}

export default App;
