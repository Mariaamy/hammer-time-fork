import "./UserProfile.css";
import UserBookings from "./UserBookings";

function UserProfile(props) {
  return (
    <section>
      <div className="userprofile--btn-container">
        <button>Edit user</button>
        <button>Block user?</button>
        <button>Delete user</button>
      </div>
      <div className="userprofile">
        <div className="userprofile--name-and-info">
          {/* db.name and db.surname*/}
          <p>{`${props.data.name} ${props.data.surname}`}</p>
          <div className="userprofile--courses">
            <p>Courses:</p>
            <ul>
              {props.data.courses &&
                props.data.courses.map((course) => {
                  return <li>{course.name}</li>;
                })}
            </ul>
          </div>
        </div>
        <div className="userprofile--bookings">
          <p>Booked tools:</p>
          <UserBookings />
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
