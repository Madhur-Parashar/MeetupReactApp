import { useEffect, useState } from "react";
import Filters from "../Filters/Filters";
import MeetupsDetails from "../MeetupsDetails/MeetupsDetails";

const STATUS_LIST = ["All", "Live", "Upcomming", "Completed"];

function Meetups() {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [meetupsList, setMeetupsList] = useState([]);
  const [filteredMeetupsList, setfilteredMeetupsList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    const fetchMeetupsList = async () => {
      let data;
      try {
        const response = await fetch(
          "https://mocki.io/v1/b05db262-b930-4906-a332-c7866cb269c5"
        );
        if (!response.ok) {
          throw new Error("Failed to fetched meetups");
        }
        data = await response.json();
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setLoading(false);
      }

      console.log(data);
      let meetupsData = getMeetUpData(data);
      console.log("meetupsData", meetupsData);
      setMeetupsList(meetupsData);
      setfilteredMeetupsList(meetupsData);
      setCategoryList(["All", ...getCategoryList(data)]);
    };
    fetchMeetupsList();
  }, []);

  const getMeetUpData = (data) => {
    return data.map((item) => {
      let currentDate = new Date();
      let startTime = new Date(item.startTime);
      let endTime = new Date(item.endTime);
      let Live = currentDate >= startTime && currentDate <= endTime;
      let Upcomming = startTime > currentDate;
      let Completed = currentDate > endTime;
      return { ...item, Live, Upcomming, Completed };
    });
  };
  const getCategoryList = (data) => {
    return data
      .map((item) => item.category)
      .filter((value, index, array) => array.indexOf(value) === index);
  };

  const onChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onChangeStatus = (event) => {
    setSelectedStatus(event.target.value);
  };
  useEffect(() => {
    let callback = (item) =>
      item[selectedStatus] && item.category === selectedCategory;
    if (selectedCategory === "All") {
      callback = (item) => item[selectedStatus];
    }
    if (selectedStatus === "All") {
      callback = (item) => item.category === selectedCategory;
    }
    if (selectedCategory === "All" && selectedStatus === "All") {
      callback = () => true;
    }
    setfilteredMeetupsList(meetupsList.filter(callback));
  }, [selectedCategory, selectedStatus, meetupsList]);

  return (
    <div className="Meetups">
      {isError ? (
        "Please refresh the page or try again later!"
      ) : (
        <>
          <Filters
            categoryList={categoryList}
            statusList={STATUS_LIST}
            selectedStatus={selectedStatus}
            selectedCategory={selectedCategory}
            onChangeCategory={onChangeCategory}
            onChangeStatus={onChangeStatus}
          />
          {isLoading ? (
            "Loading..."
          ) : (
            <MeetupsDetails meetupsList={filteredMeetupsList} />
          )}
        </>
      )}
    </div>
  );
}

export default Meetups;
