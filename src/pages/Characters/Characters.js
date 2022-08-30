import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/";
import Progressbar from "../../components/ProgressBar/PorgressBar";
import MUIAlert from "../../components/MUIAlert/MUIAlert";
import fetchPeople from "../../redux/actions/peopleData";

const Characters = () => {
  const peopleData = useSelector((state) => state.peopleDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(peopleData.vehicles);
    if (!peopleData.people.results  ) {
      dispatch(fetchPeople());
    }
  }, []);
  return (
    <>
      {peopleData.error ? (
        <MUIAlert severity="error" mensaje="Something went wrong :(" />
      ) : (
        ""
      )}
      {peopleData.loading ? <Progressbar /> : "Contenido que necesita datos"}
    </>
  );
};

export default Characters;
