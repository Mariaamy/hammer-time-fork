import "./UserCard.css";
import { Link } from "react-router-dom";

function UserCard(props) {
  return (
    <div class="user">
      {/* href to user */}
      <p className="user--link">
        <Link
          to={`/user/${props.data._id}`}
        >{`${props.data.name} ${props.data.surname}`}</Link>
      </p>
    </div>
  );
}

export default UserCard;
