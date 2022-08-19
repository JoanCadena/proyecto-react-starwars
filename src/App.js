import "./styles/App.css";
import { useSelector, useDispatch } from "react-redux/";
import { useEffect } from "react";
import MUIButton from "./components/MUIButton/MUIButton";
import MUIAlert from "./components/MUIAlert/MUIAlert";
import fetchPeople from "./redux/actions/peopleData";
import fetchVehicles from "./redux/actions/vehiclesData";
import fetchStarships from "./redux/actions/starshipsData";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const peopleData = useSelector((state) => state.peopleDataReducer);
  const vehiclesData = useSelector((state) => state.vehiclesDataReducer);
  const starshipsData = useSelector((state) => state.starshipsDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
    dispatch(fetchVehicles());
    dispatch(fetchStarships());
  }, []);

  return (
    <>
      <NavBar />
      {peopleData.error || vehiclesData.error || starshipsData.error ? (
        <MUIAlert severity="error" mensaje="Something went wrong :(" />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
