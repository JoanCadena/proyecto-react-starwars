import "./Home.styles.css";
import InfoCard from "../../components/InfoCard/InfoCard";
import { infoCharacters, infoVehicles, infoStarships } from "./HomeUtils";
import Title from "../../components/Title/Title";

const Home = () => {
  return (
    <div>
      <h2 className="invisible">You are home</h2>
      <div className="cardContainer">
        <InfoCard info={infoCharacters} color="red" />
        <InfoCard info={infoVehicles} color="blue" />
        <InfoCard info={infoStarships} color="violet" />
        <InfoCard info={infoCharacters} color="red" />
        <InfoCard info={infoVehicles} color="blue" />
        <InfoCard info={infoStarships} color="violet" />
      </div>
        <center><Title type={2} width="250" /></center>
    </div>
  );
};

export default Home;
