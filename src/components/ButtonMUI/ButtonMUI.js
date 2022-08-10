import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchPeople from "../../redux/actions/peopleData";
import fetchVehicles from "../../redux/actions/vehiclesData";
import fetchStarships from "../../redux/actions/starshipsData";

const ButtonMUI = () => {
  const [buttonColor, setButtonColor] = useState("primary");
  const [buttonContent, setButtonContent] = useState("Presioname!");
  // const peopleData = useSelector(state => state.peopleDataReducer)
  // const people = peopleData.people[0]
  const dispatch = useDispatch();

  const handleClick = async () => {
    setButtonColor((prevColor) => {
      return prevColor === "primary" ? "danger" : "primary";
    });
  };

  const handleFocus = (texto) => {
    setButtonContent(texto);
  };

  useEffect(() => {
    dispatch(fetchPeople());
    dispatch(fetchVehicles());
    dispatch(fetchStarships());
  }, []);

  return (
    <Button
      variant="contained"
      className={`w-50 start-50 bg-${buttonColor} translate-middle-x `}
      onClick={handleClick}
      onMouseOver={() => handleFocus("Hazlo Rapido!!!")}
      onMouseOut={() => handleFocus("Presioname!")}
    >
      {buttonContent}
    </Button>
  );
};

export default ButtonMUI;
