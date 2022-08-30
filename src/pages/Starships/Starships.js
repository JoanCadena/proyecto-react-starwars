import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/";
import Progressbar from "../../components/ProgressBar/PorgressBar";
import MUIAlert from "../../components/MUIAlert/MUIAlert";
import fetchStarships from "../../redux/actions/starshipsData";

const Characters = () => {
  const starshipsData = useSelector((state) => state.starshipsDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(starshipsData.starships);
    if (!starshipsData.starships.results  ) {
      dispatch(fetchStarships());
    }
  }, []);
  return (
    <>
      {starshipsData.error ? (
        <MUIAlert severity="error" mensaje="Something went wrong :(" />
      ) : (
        ""
      )}
      {starshipsData.loading ? <Progressbar /> : "Contenido que necesita datos"}
    </>
  );
};

export default Characters;
