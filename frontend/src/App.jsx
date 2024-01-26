
import { Route, Routes} from "react-router-dom";
import CoinDetails from "./pages/CoinDetails";
import './index.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/coin/:id" element={<CoinDetails />} />
      <Route path="/about" element={<About/>}
/>    </Routes>
    </>
  );
}

export default App;
