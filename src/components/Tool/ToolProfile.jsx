import "./ToolProfile.css";
// import locationright from "../../media/location/location-right.png";
import logo from "./logo1.png";
import { useState, useEffect } from "react";
import hAPI from "../../api/hAPI";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function ToolProfile(props) {

  const navigate = useNavigate()
  const { toolID } = useParams()

  const [bookinginputs, setBookinginputs] = useState({});
  const [reportinputs, setReportinputs] = useState({});
  const [bookings, setBookings] = useState({});
  const [display, setDisplay] = useState("");

  const NA = 'NA';


  // NEEDS FIXING - DOESNT WAIT FOR DATA TO BE FETCHED?
  
  useEffect(() => {
    setDisplay(false)

    hAPI.tools.getBookings(toolID).then((response) => {
      setBookings(response.data);
    });
  }, []);

  console.log(bookings)

  // END OF NEEDS FIXING

  

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
          navigate('/tools')
        },
        (error) => {
          // Failed to mark as unavailable
          console.log(error);
        }
      )
  }

  const markFixed = (e) => {
    e.preventDefault();

    hAPI.tools
      .markFixed(props.data._id, 0)
      .then(
        (data) => {
          // Successfully marked as unavailable
          console.log(data);
          navigate('/tools');
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
          navigate('/tools');
        },
        (error) => {
          // Failed reporting
          console.log(error);
        }
      )
  }

  const showEditForm = (e) => {
    e.preventDefault();

    display === false ? setDisplay(true) : setDisplay(false)
  }

  const handleEditTool = (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let information = e.target.information.value;
    let location = e.target.location.value;
    let quantity = e.target.quantity.value;
    let courses = e.target.courses.value;
    let image = e.target.image.value;

    console.log(name, information, quantity, courses, toolID, location)


    hAPI.tools
    .updateTool(name, information, quantity, courses, image, toolID)
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
  }

  return (
    <>
      <section className="toolprofile--container">
        <div className="toolprofile--btn-container">
          <a href="#toolprofile--broken-container">
            <button>Report issue</button>
          </a>
          <button className="user--btn" onClick={handleDeleteTool}>Delete tool</button>
          <button className="user--btn" onClick={showEditForm}>Edit tool</button>
          <button className="user--btn" onClick={markFixed}>Mark as fixed</button>
        </div>
        <div className={display === true ? "toolprofile--showEditTool" : "toolprofile--hideEditTool"}>
          <form onSubmit={handleEditTool} className="tool--profile--edit">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"/>
            <label htmlFor="information">Information</label>
            <input type="text" name="information" id="information"/>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location"/>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity"/>
            <label htmlFor="courses">Required courses</label>
            <input type="text" name="courses" id="courses"/>
            <label htmlFor="image">Image(endre til fil)</label>
            <input type="text" name="image" id="image"/>
            <button type="submit" name="submit" id="submit">Edit tool</button>
          </form>
        </div>
          {/* db.img */}
          <img src={logo} alt="react logo" className="tool--image--img" />
          <div className="toolprofile">
          <h1>{props.data.name}</h1>
          <div class="toolprofile--info-and-avail">
            <p>
              <span className="span--bold">Information: </span>
              {props.data.information}
            </p>
            {/* db.location */}
            <p>
              <span className="span--bold">Location: </span>Verkstedet
            </p>
            <p>
              <span className="span--bold">Available for booking: </span>
              {props.data.availability >= 0 ? "YES" : "NO"}
            </p>
            <div className="toolprofile--bookings"></div>
            <p>
              <span className="span--bold">Registered bookings:</span>
            </p>
            <p><span className="span--bold">From</span> {bookings ? bookings.startTime : NA} <span className="span--bold">to</span> {bookings ? bookings.endTime : NA}</p>
          </div>
          </div>
          <div className="toolprofile--booking--container">
            <h2>Book tool</h2>
            <p>Book this tool by choosing a time period to book the item for and press the button below.</p>
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
