import './UserProfile.css';
import UserBookings from './UserBookings';

function UserProfile(props) {
    return (
        <section>
            <div class="userprofile">
                <div class="userprofile--name-and-info">
                    {/* db.name and db.surname*/}
                    <p>Name of user</p>
                    <p>Courses:</p>
                    <ul>
                    {/* db.courses.map(course) => {
                        <li>{course}</li>
                    } */}
                        <li>Course</li>
                    </ul>
                </div>
                <div class="userprofile--bookings">
                    <p>Booked tools:</p>
                    <UserBookings/>
                </div>
            </div>
        </section>
    );
}
  
export default UserProfile;