import MeetupsCard from "../MeetupCard/MeetupCard";
import "./MeetupsDetails.css"

function MeetupsDetails(props) {
  let meetupsRenderList =  props.meetupsList.map((meetupData)=><MeetupsCard key={meetupData.name} meetupData={meetupData}/>)
    return (
      <div className="MeetupsDetails">
        {meetupsRenderList.length>0 ? meetupsRenderList : "No match found"}
      </div>
    );
  }
  
  export default MeetupsDetails;
  