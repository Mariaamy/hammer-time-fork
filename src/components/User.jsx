import UserCard from "./User/UserCard";
import UserProfile from "./User/UserProfile";
import { useEffect, useState } from "react";
import hAPI from "../api/hAPI";

function User(props) {
  // Fetch data from API here, and pass it to the appropriate display component
  const [data, setData] = useState({});
  useEffect(() => {
    if (props.data) {
      setData(props.data);
    } else if (props.userID) {
      // Fetch API data here
      hAPI.users.getUser(props.userID).then((data) => {
        setData(data.data);
      });
    }
  }, [props.userID, props.data]);

  return (
    (props.variant === "card" && <UserCard data={data} />) || (
      <UserProfile data={data} />
    )
  );
}

export default User;
