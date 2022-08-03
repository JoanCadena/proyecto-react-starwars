import { Button } from "@mui/material";
import { useState } from "react";

const ButtonMUI = () => {
const [buttonColor, setButtonColor] = useState("primary");
const [buttonContent, setButtonContent] = useState("Presioname!");

  const handleClick = () => {
    setButtonColor((prevColor) => {
      return prevColor === "primary" ? "danger" : "primary";
    });
  };

  const handleFocus = (texto) => {
    setButtonContent(texto)
  }

  return (
    <Button
      variant="contained"
      className={`w-50 start-50 bg-${buttonColor} translate-middle-x `}
      onClick={handleClick}
      onMouseOver={() => handleFocus('Hazlo Rapido!!!')}
      onMouseOut={() => handleFocus('Presioname!')}
      
    >
      {buttonContent}
    </Button>
  );
};

export default ButtonMUI;
