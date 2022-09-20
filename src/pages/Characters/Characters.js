import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/";
import Progressbar from "../../components/ProgressBar/PorgressBar";
import MUIAlert from "../../components/MUIAlert/MUIAlert";
import fetchPeople from "../../redux/actions/peopleData";
import InfoCard from "../../components/InfoCard/InfoCard";
import Title from "../../components/Title/Title";

const Characters = () => {
  const peopleData = useSelector((state) => state.peopleDataReducer);
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    !peopleData.people.results && dispatch(fetchPeople());
  }, []);

  useEffect(() => {
    setCharacters(peopleData.people.results);
  }, [peopleData]);

  return (
    <>
      <div className="m-3">
        <center>
          <Title type={2} width="250" />
        </center>
      </div>
      {peopleData.error && (
        <MUIAlert severity="error" mensaje="Something went wrong :(" />
      )}
      {peopleData.loading ? (
        <Progressbar />
      ) : (
        !peopleData.error && (
          <div>
            <div className="cardContainer">
              {characters?.map((el, idx) => (
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
