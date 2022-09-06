import "./Home.styles.css";
import InfoCard from "../../components/InfoCard/InfoCard";
import Title from "../../components/Title/Title";
import MUICarousel from "../../components/Carousel/MUICarousel";
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
        <InfoCard info={infoCharacters} color="red" />
        <InfoCard info={infoVehicles} color="blue" />
        <InfoCard info={infoStarships} color="violet" />
      </div>
      <span className="invisible">You are home</span>
    </div>
  );
};

export default Home;
