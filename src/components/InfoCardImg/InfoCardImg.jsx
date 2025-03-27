import "./InfoCardImg.styles.css";
// type - horizontal (sm, lg), vertical (sm, md), square

const InfoCard = ({ color, info }) => {
  return (
    <div className={`infoContainerImg`}>
      <img
        src={info.img}
        className={`image underbar--${color}`}
        alt={`${info.title} image`}
      />
      <div className="infoDivImg d-block-flex ps-2 pe-2">
        <h5 className={`title`}>{info.title}</h5>
        <p className="descriptionImg">{info.description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
