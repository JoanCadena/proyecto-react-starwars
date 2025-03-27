import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Progressbar from "../components/ProgressBar/PorgressBar";
import MUIAlert from "../components/MUIAlert/MUIAlert";
import fetchStarships from "../redux/actions/starshipsData";
import InfoCard from "../components/InfoCard/InfoCard";
import Title from "../components/Title/Title";

const Characters = () => {
  const starshipsData = useSelector((state) => state.starshipsDataReducer);
  const dispatch = useDispatch();
  const [starships, setStarships] = useState();

  useEffect(() => {
    if (!starshipsData.starships.results) {
      dispatch(fetchStarships());
    }
  }, []);

  useEffect(() => {
    setStarships(starshipsData.starships.results);
  }, [starshipsData]);
  return (
    <>
      <div className="m-3">
        <center>
          <Title type={2} width="250" />
        </center>
      </div>
      {starshipsData.error && (
        <MUIAlert severity="error" mensaje="Something went wrong :(" />
      )}
      {starshipsData.loading ? (
        <Progressbar />
      ) : (
        !starshipsData.error && (
          <div>
            <div className="cardContainer">
              {starships?.map((el, idx) => (
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
