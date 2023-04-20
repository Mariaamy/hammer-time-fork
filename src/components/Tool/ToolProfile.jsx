import "./ToolProfile.css";
import locationright from "../../media/location/location-right.png";
import logo from "./logo1.png";
import { useState } from "react";
import hAPI from "../../api/hAPI";
import { useNavigate } from "react-router-dom";

function ToolProfile(props) {

  const navigate = useNavigate()

  const [bookinginputs, setBookinginputs] = useState({});
  const [reportinputs, setReportinputs] = useState({});

  const handleBookingChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBookinginputs((values) => ({ ...values, [name]: value }));
  };

  const handleReportChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReportinputs((values) => ({ ...values, [name]: value}));
  }


  const handleBookingSubmit = (e) => {
    e.preventDefault();

    hAPI.tools
      .bookTool(props.data._id, bookinginputs.startdate, bookinginputs.enddate)
      .then(
        (data) => {
          // Successfully booked
          console.log(data);
        },
        (error) => {
          // Failed booking
          console.log(error);
        }
      );
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();

    hAPI.tools
      .reportTool(props.data._id, reportinputs.report, reportinputs.image)
      .then(
        (data) => {
          // Successfully reported
          console.log(data);
        },
        (error) => {
          // Failed reporting
          console.log(error);
        }
      )

    hAPI.tools
      .markBroken(props.data._id, 1)
      .then(
        (data) => {
          // Successfully marked as unavailable
          console.log(data);
        },
        (error) => {
          // Failed to mark as unavailable
          console.log(error);
        }
      )
  }

  const handleDeleteTool = (e) => {
    e.preventDefault();

    hAPI.tools
      .deleteTool(props.data._id)
      .then(
        (data) => {
          // Successfully reported
          console.log(data);
          navigate('/tools')
        },
        (error) => {
          // Failed reporting
          console.log(error);
        }
      )
  }

  return (
    <>
      <section className="toolprofile--container">
        <div className="toolprofile--btn-container">
          <a href="#toolprofile--broken-container">
            <button>Report issue</button>
          </a>
          <button className="user--btn" onClick={handleDeleteTool}>Delete tool</button>
          <button className="user--btn">Edit tool</button>
        </div>
        <div class="toolprofile">
          <div class="toolprofile--name-and-img">
            {/* db.name */}
            <h1>{props.data.name}</h1>
            {/* db.img */}
            <img src={logo} alt="react logo" className="tool--image--img" />
          </div>

          <div class="toolprofile--info-and-avail">
            {/* db.information */}
            {/*<p>{props.data.information}</p>*/}
            <p>
              <span className="span--bold">Information: </span>
              {props.data.information}
            </p>
            {/* db.location */}
            <p>
              <span className="span--bold">Location: </span>To the right
            </p>
            <img
              className="location-img"
              src={locationright}
              alt="Map of location"
            ></img>
            {/* db availability - db broken - db missing = Available for booking: */}
            {/*<p>Available for booking: {props.data.availability}</p>*/}
            <p>
              <span className="span--bold">Available for booking: </span>
              {props.data.availability === 0 ? "YES" : "NO"}
            </p>
          </div>

          {/* function - add 1 to db tools.missing */}
          <div className="toolprofile--booking--container">
            <form
              method="POST"
              className="toolprofile--booking-form"
              onSubmit={handleBookingSubmit}
            >
              <input
                type="date"
                id="startdate"
                name="startdate"
                value={bookinginputs.startdate || ""}
                onChange={handleBookingChange}
              />
              <input
                type="date"
                id="enddate"
                name="enddate"
                value={bookinginputs.enddate || ""}
                onChange={handleBookingChange}
              />
              <button type="submit">Book tool</button>
            </form>
          </div>
        </div>
        {/* function - add 1 to db tools.broken */}
        <div id="toolprofile--broken-container">
        <h2>Report issue</h2>
        <p>Here you can send a report on the tool if it's broken, missing or that you'd like it replaced.</p>
          <form 
            method="POST" 
            className="toolprofile--broken-form"
            onSubmit={handleReportSubmit}
            >
            <label for="report">Write here why/how the tool is broken or needs replacing.</label>
            <input
              type="text"
              id="report"
              name="report"
              value={reportinputs.report || ""}
              onChange={handleReportChange}
            ></input>
            <label for="image">Upload image of broken tool:</label>
            {/* <input
              type="file"
              id="image" 
              name="image"
            ></input> */}
            <input
              type="text"
              id="image" 
              name="image"
              value={reportinputs.image || ""}
              onChange={handleReportChange}
            ></input>
            <button>Submit report</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ToolProfile;
