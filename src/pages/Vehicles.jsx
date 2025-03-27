import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Progressbar from "../components/ProgressBar/PorgressBar";
import MUIAlert from "../components/MUIAlert/MUIAlert";
import fetchVehicles from "../redux/actions/vehiclesData";
import InfoCard from "../components/InfoCard/InfoCard";
import Title from "../components/Title/Title";

const Characters = () => {
  const vehiclesData = useSelector((state) => state.vehiclesDataReducer);
  const dispatch = useDispatch();
  const [vehicles, setVehicles] = useState();

  useEffect(() => {
    if (!vehiclesData.vehicles.results) {
      dispatch(fetchVehicles());
    }
  }, []);

  useEffect(() => {
    setVehicles(vehiclesData.vehicles.results);
  }, [vehiclesData]);

  return (
    <>
      <div className="m-3">
        <center>
          <Title type={2} width="250" />
        </center>
      </div>
      {vehiclesData.error && (
        <MUIAlert severity="error" mensaje="Something went wrong :(" />
      )}
      {vehiclesData.loading ? (
        <Progressbar />
      ) : (
        !vehiclesData.error && (
          <div>
            <div className="cardContainer">
              {vehicles?.map((el, idx) => (
                <InfoCard info={el} key={idx} />
              ))}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Characters;
