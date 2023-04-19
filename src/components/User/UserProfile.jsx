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
          <p>Anna Andersen</p>
          <div className="userprofile--courses">
            <p>Courses:</p>
            <ul>
              {/* db.courses.map(course) => {
                        <li>{course}</li>
                    } */}
              <li>HMS 1 Sikker bruk av sager</li>
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
