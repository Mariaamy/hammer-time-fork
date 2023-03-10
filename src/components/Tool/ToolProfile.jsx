import './ToolProfile.css';

function ToolProfile(props) {
    return (
        <section>
            <div class="toolprofile">
            <div class="toolprofile--name-and-img">
                {/* db.name */}
                <p>Name of tool</p>
                {/* db.img */}
                <img src={require('./logo1.png')} alt="react logo" className="tool--image--img"/>
            </div>
            <div class="toolprofile--info-and-avail">
                {/* db.information */}
                <p>information about the tool</p>
                {/* db.location */}
                <p>Location: </p>
                {/* db availability - db broken - db missing = Available for booking: */}
                <p>Available for booking: 10</p>
            </div>
            </div>
            <div class="toolprofile--btns">
                {/* function - add 1 to db tools.broken */}
                <form method="POST">
                    <label for="report">Write out why/how the tool is broken.</label>
                    <textarea id="report" name="report" placeholder="Write here..."></textarea>
                    <label for="image">Upload image of broken tool:</label>
                    <input type="file" id="image" name="image"></input>
                    <button>Mark as broken</button>
                </form>
                {/* function - add 1 to db tools.missing */}
                <button>Mark as out of place</button>

                <button>Request purchase of new tool</button>

                <form method="POST">
                    <input type="date" id="startdate" name="startdate"/>
                    <input type="date" id="enddate" name="enddate"/>
                    {/* function - add user objectid and tool object id, start-date, end-date to bookings db */}
                    <button type="submit">Book tool</button>
                </form>
            </div>
        </section>
    );
}
  
export default ToolProfile;