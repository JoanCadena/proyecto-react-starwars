import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/";
import Progressbar from "../../components/ProgressBar/PorgressBar";
import MUIAlert from "../../components/MUIAlert/MUIAlert";
import fetchVehicles from "../../redux/actions/vehiclesData";

const Characters = () => {
  const vehiclesData = useSelector((state) => state.vehiclesDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(vehiclesData.vehicles);
    if (!vehiclesData.vehicles.results  ) {
      dispatch(fetchVehicles());
    }
  }, []);
  return (
    <>
      {vehiclesData.error ? (
        <MUIAlert severity="error" mensaje="Something went wrong :(" />
      ) : (
        ""
      )}
      {vehiclesData.loading ? <Progressbar /> : "Contenido que necesita datos"}
    </>
  );
};

export default Characters;
