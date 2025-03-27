import { Route, Routes, Navigate } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Vehicles from "./pages/Vehicles";
import Starships from "./pages/Starships";
import Bg from "./assets/bg_stars.gif";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div
        className="pageContainer min-vh-100 min-vw-100"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <NavBar />
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
    </Provider>
  );
}

export default App;
