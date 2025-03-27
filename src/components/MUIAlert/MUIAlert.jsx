import { Alert, AlertTitle } from "@mui/material";

const MUIAlert = ({ severity, mensaje }) => {
  return (
    <Alert severity={severity} className='bg-opacity-25 border border-1 border-dark rounded-2 border-opacity-50 m-3' data-testid='AlertComp' >
      <AlertTitle
        style={{
          textTransform: "capitalize",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        {severity}
      </AlertTitle>
      {mensaje}
    </Alert>
  );
};

export default MUIAlert;
