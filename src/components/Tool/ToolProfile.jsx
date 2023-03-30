import './ToolProfile.css';
import locationright from '../../media/location/location-right.png';


function ToolProfile(props) {
    return ( <>
        <section className="toolprofile--container">
             <div className="toolprofile--btn-container">
                <a href="#toolprofile--broken-container"><button>Report issue</button></a>
                <button>Request renewal</button>
                <button>Delete tool</button>
                <button>Edit tool</button>
            </div>
            <div class="toolprofile">
                
            <div class="toolprofile--name-and-img">
                {/* db.name */}
                {/* <p>{props.data.title}</p> */}
                <h1>{props.data.title}</h1>
                {/* db.img */}
                <img src={require('./logo1.png')} alt="react logo" className="tool--image--img"/>
            </div>

            <div class="toolprofile--info-and-avail">
                {/* db.information */}
                {/*<p>{props.data.information}</p>*/}
                <p><span className='span--bold'>Information: </span>{props.data.information}</p>
                {/* db.location */}
                <p><span className='span--bold'>Location: </span>To the right</p>
                <img className='location-img' src={locationright} alt="Map of location"></img>
                {/* db availability - db broken - db missing = Available for booking: */}
                {/*<p>Available for booking: {props.data.availability}</p>*/}
                <p><span className='span--bold'>Available for booking: </span>{props.data.availability === 0 ? "YES" : "NO"}</p>
            </div>

             {/* function - add 1 to db tools.missing */}
             <div className='toolprofile--booking--container'>
                <form method="POST" className="toolprofile--booking-form">
                    <input type="date" id="startdate" name="startdate"/>
                    <input type="date" id="enddate" name="enddate"/>
                    {/* function - add user objectid and tool object id, start-date, end-date to bookings db */}
                    <button type="submit">Book tool</button>
                </form>
                </div>

            </div>
                {/* function - add 1 to db tools.broken */}
                <div id='toolprofile--broken-container'>
                <form method="POST" className="toolprofile--broken-form">
                    <label for="report">Write out why/how the tool is broken.</label>
                    <textarea id="report" name="report" placeholder="Write here..."></textarea>
                    <label for="image">Upload image of broken tool:</label>
                    <input type="file" id="image" name="image"></input>
                    <button>Mark as broken</button>
                </form>
                </div>

        </section>
    </>
    );
}
  
export default ToolProfile;