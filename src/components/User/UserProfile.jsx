import "./UserProfile.css";
import UserBookings from "./UserBookings";
import { useState } from "react";


function UserProfile(props) {

  const [display, setDisplay] = useState("");


  const showEditForm = (e) => {
    e.preventDefault();

    display === false ? setDisplay(true) : setDisplay(false)
  }

  const handleEditTool = (e) => {
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
          <form onSubmit={handleEditTool}>
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
          <UserBookings />
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
