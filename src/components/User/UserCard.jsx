import './UserCard.css';


function UserCard(props) {
    return (
            <div class="user">
                    {/* href to user */}
                    <p><a href="/user">Name of user</a></p>
                    <p>Courses:</p>
                <div>
                    {/* db.name and db.surname*/}
                    <ul>
                    {/* db.courses.map(course) => {
                        <li>{course}</li>
                    } */}
                        <li class="user--info">Course taken</li>
                        <li class="user--info">course</li>
                    </ul>
                </div>
            </div>
    );
}

  
export default UserCard;