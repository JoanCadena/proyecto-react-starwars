import { Button } from "@mui/material";

const MUIButton = ({btnContent, btnColor, onClick}) => {

  return (
    <Button
      variant="contained"
      className={`w-auto start-50 translate-middle-x bg-${btnColor} m-2`}
      onClick={onClick}
    >
      {btnContent}
    </Button>
  );
};

export default MUIButton;
