import "./styles/App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import Vehicles from "./pages/Vehicles/Vehicles";
import Starships from "./pages/Starships/Starships";
import Bg from "./assets/bg_stars.gif";

function App() {
  return (
    <div className="pageContainer min-vh-100" style={{ backgroundImage: `url(${Bg})` }}>
      <NavBar />
      {/* <div> */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/log_in" />
        <Route path="/sign_up" />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
