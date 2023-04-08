import "./MeetupsCard.css";

function MeetupsCard(props) {
  let statusTag;
  if (props.meetupData.Live) {
    statusTag = {label:"LIVE",class:"MeetupsCard__status MeetupsCard__live"};
  } else if (props.meetupData.Upcomming) {
    statusTag =  {label:"UPCOMMING",class:"MeetupsCard__status MeetupsCard__upcoming"};
  } else if (props.meetupData.Completed) {
    statusTag =  {label:"COMPLETED",class:"MeetupsCard__status MeetupsCard__completed"};;
  }
  const MONTH = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let {startTime} = props.meetupData;
  startTime = new Date(startTime);
  let dateFormat = `${startTime.getDate()} ${MONTH[startTime.getMonth()]} ${startTime.getFullYear()}`
  return (
    <div className="MeetupsCard">
      <div className="MeetupsCard__img-container">
        <img
          src={props.meetupData.image}
          alt={props.meetupData.name}
          width="292px"
          height="198px"
        />
      </div>

      <div className="MeetupsCard__details">
        <div className={statusTag.class}>{statusTag.label}</div>
        <div className="MeetupsCard__info pt4">
          <span className="MeetupsCard__info__startime pr4">{dateFormat}</span> |{" "}
          <span className="pl4 pr4">{props.meetupData.category}</span> |{" "}
          <span className="pl4">{props.meetupData.venue}</span>
        </div>
        <div className="MeetupsCard__name pt4">
            {props.meetupData.name}
        </div>
        <div className="MeetupsCard__description pt4">
            {props.meetupData.description}
        </div>
      </div>
    </div>
  );
}

export default MeetupsCard;
