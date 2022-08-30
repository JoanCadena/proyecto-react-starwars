import sw_logo_stacked from "../../assets/sw_logo_stacked.png";
import sw_logo_horiz from "../../assets/sw_logo_horiz.png";

/**
 * @param {*} type
 * (1) Horizontal star wars title
 * (2) Stacked star wars title
 */
const Title = ({ type, width }) => {
  if (type === 1) {
    return <img src={sw_logo_horiz} width={width}></img>;
  } else {
    return <img src={sw_logo_stacked} width={width}></img>;
  }
};

export default Title;
