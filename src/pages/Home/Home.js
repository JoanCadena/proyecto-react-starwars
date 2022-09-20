import "./Home.styles.css";
import MUICarousel from "../../components/MUICarousel/MUICarousel";
import InfoCardImg from "../../components/InfoCardImg/InfoCardImg";
import Title from "../../components/Title/Title";
import {
  infoCharacters,
  infoVehicles,
  infoStarships,
  items,
} from "./HomeUtils";

const Home = () => {
  return (
    <div>
      <MUICarousel items={items} />
      <div className="m-3">
        <center>
          <Title type={2} width="250" />
        </center>
      </div>
      <div className="cardContainer">
        <InfoCardImg info={infoCharacters} color="red" />
        <InfoCardImg info={infoVehicles} color="blue" />
        <InfoCardImg info={infoStarships} color="violet" />
      </div>
      <span className="invisible">You are home</span>
    </div>
  );
};

export default Home;
