import UserCard from "./User/UserCard";
import UserProfile from "./User/UserProfile";

function User(props) {
    // Fetch data from API here, and pass it to the appropriate display component
    const data = {};

    return (props.variant==="card" && <UserCard data={data}/>) || <UserProfile data={data}/>;
}
  
export default User;