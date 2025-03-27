import { LinearProgress } from "@mui/material";
import "./ProgressBar.styles.css"

const Progressbar = () => {
  return (
    <div className="progressContainer">
      <LinearProgress color="secondary"/>
    </div>
  );
};

export default Progressbar;
