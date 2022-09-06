import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { NavLink } from "react-router-dom";
import prevIcon from "../../assets/icon_double_left.png";
import nextIcon from "../../assets/icon_double_right.png";
import "./MUICarousel.styles.css";

export const Item = ({ item }) => {
  return (
    <NavLink to={`/blog/${item.name.replaceAll(" ", "_").toLowerCase()}`} end>
      <Paper
        data-testid="carImg"
        className="h-100 paper"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          position: "relative",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="name p-3 position-absolute bottom-0">{item.name}</h2>
      </Paper>
    </NavLink>
  );
};

const MUICarousel = ({ items }) => {
  return (
    <Carousel
      navButtonsAlwaysVisible
      fullHeightHover={false}
      height="86vh"
      NextIcon={<img src={nextIcon} />}
      PrevIcon={<img src={prevIcon} />}
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "black",
          borderRadius: 2,
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default MUICarousel;
