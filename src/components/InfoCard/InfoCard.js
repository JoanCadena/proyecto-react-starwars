import "./InfoCard.styles.css";
// type - horizontal (sm, lg), vertical (sm, md), square

const InfoCard = ({ color, info }) => {
  return (
    <div className={`infoContainer`}>
      <img src={info.img} className={`image underbar--${color}`} alt={`${info.title} image`} />
      <div className="infoDiv d-block-flex ps-2 pe-2">
        <h5 className={`title`}>{info.title}</h5>
        <p className="description">{info.description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
