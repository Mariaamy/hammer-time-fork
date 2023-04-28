import "./UserProfile.css";
import UserBookings from "./UserBookings";
import { useState, useEffect } from "react";
import hAPI from "../../api/hAPI";
import { Link } from "react-router-dom";


function UserProfile(props) {

  const [display, setDisplay] = useState("");
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    // setDisplay(false)

    hAPI.tools.getBookings().then((response) => {
      setBookings(response.data);
    });
  }, []);

   // https://stackoverflow.com/questions/17446466/add-15-minutes-to-string-in-javascript
    const calculateTime = (mins, time) => {
    const newTime = new Date(new Date("1970/01/01 " + time).getTime() + mins * 60000).toLocaleTimeString('en-UK', { hour: '2-digit', minute: '2-digit', hour12: false });
    return newTime;
  }


  const showEditForm = (e) => {
    e.preventDefault();

    display === false ? setDisplay(true) : setDisplay(false)
  }

  const handleEditUser = (e) => {
    e.preventDefault();

    let firstname = e.target.firstname.value;
    let lastname = e.target.lastname.value;
    let courses = e.target.courses.value;

    console.log(firstname, lastname, courses, props.data.id)


    // hAPI.tools
    // .updateUser(firstname, lastname, courses, userID)
    // .then(
    //   (data) => {
    //     // Successfully reported
    //     console.log(data);
    //   },
    //   (error) => {
    //     // Failed reporting
    //     console.log(error);
    //   }
    // )
  }


  return (
    <section>
      <div className="userprofile--btn-container">
        <button onClick={showEditForm}>Edit user</button>
        <button>Delete user</button>
      </div>
      <div className={display === true ? "userprofile--showEditTool" : "userprofile--hideEditTool"}>
          <form onSubmit={handleEditUser} className="user--profile--edit">
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname" id="firstname"/>
            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname" id="lastname"/>
            <label htmlFor="quantity">Approved courses</label>
            <input type="text" name="courses" id="courses"/>
            <button type="submit" name="submit" id="submit">Edit user</button>
          </form>
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
                  return <li key={course.code}>{course.name}</li>;
                })}
            </ul>
          </div>
        </div>
        <div className="userprofile--bookings">
          <p>Booked tools:</p>
          <div>
            {bookings.map((booking) => {
              if(booking.user._id === props.data._id) {
                return (
                <p className="booking--li" key={booking._id}>Booked tool: <Link to={`/tool/${booking.tool._id}`}>{booking.tool.name}</Link>: Booking begins at {booking.startTime} {booking.endTime} and ends at {booking.startTime} {props.data.type === 0 ? calculateTime(120, booking.endTime) : calculateTime(240, booking.endTime)}</p>
                 );
              }
            })}
            </div>

          {/* <UserBookings /> */}
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
