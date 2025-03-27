import "./InfoCard.styles.css";
// type - horizontal (sm, lg), vertical (sm, md), square

const InfoCard = ({ info }) => {
  return (
    <div className={`infoContainer`}>
      <div className="infoDiv d-block-flex ps-2 pe-2">
        <h5 className={`title`}>{info.name}</h5>
        <p className="description">{info.name}</p>
      </div>
    </div>
  );
};

export default InfoCard;
