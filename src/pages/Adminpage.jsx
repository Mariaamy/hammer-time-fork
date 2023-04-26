import "./Adminpage.css";
import User from "../components/User";
import Tool from "../components/Tool";
// import hammerimg from "../media/hammer.png";
import hAPI from "../api/hAPI";
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

function Adminpage() {
  const [toolinputs, setToolinputs] = useState({});
  const [users, setUsers] = useState([]);
  const [userinputs, setUserInputs] = useState({});
  const [reports, setReports] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    hAPI.users.getUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

  useEffect(() => {
    hAPI.tools.getReports().then((data) => {
      setReports(data.data);
    });
  }, []);


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setToolinputs((values) => ({ ...values, [name]: value }));
  };


  const handleToolSubmit = (e) => {
    e.preventDefault();

    hAPI.tools
      .createTool(toolinputs.toolname, toolinputs.information, toolinputs.location, toolinputs.quantity, toolinputs.requiredcourses, toolinputs.image)
      .then(
        (data) => {
          // Successfully created tool
          console.log(data);
          navigate('/tools')
        },
        (error) => {
          // Failed tool creation
          console.log(error);
        }
      );
  };

  const handleUserChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInputs((values) => ({ ...values, [name]: value }));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();

    hAPI.users
      .createUser(userinputs.firstname, userinputs.surname, userinputs.email, userinputs.password, userinputs.approvedcourses)
      .then(
        (data) => {
          // Successfully created tool
          console.log(data);
        },
        (error) => {
          // Failed tool creation
          console.log(error);
        }
      );
  };

  const handleDeleteReport = (e, reportID) => {
    e.preventDefault()

    hAPI.tools
      .deleteReport(reportID)
      .then(
        (data) => {
          // Successfully reported
          console.log(data);
          navigate('/admin');
        },
        (error) => {
          // Failed reporting
          console.log(error);
        }
      )
  }

  return (
    <>
      <section className="section">
        <div className="adminpage--intro">
          <h1>Administrative page</h1>
          <p>
            This page is for managing tools and users. Here you'll find an overview of all existing tools and users as well as
            forms to create new users and tools. You'll also find a list with reports posted by users in the case of missing and/or broken tools, or
            requests for repurchase of tools. 
          </p>
        </div>
  
        <div className="adminpage--tool">
          <h2 className="adminpage--header">Tool management</h2>
          <div className="adminpage--reports">
            <h2 className={reports.length === 0 ? "adminpage--header" : "adminpage--header needsattention"}>Tool reports</h2>
            <div>
            {reports.length === 0 ? <p>No reports to show</p> : ""}
            {reports.map((report) => {
              return (
              <>
              <div key={report._id} className="adminpage--reports--report">
                <p className="adminpage--reports--toolinfo"><span className="adminpage--reports--toolinfo--span">Tool: </span>{report.tool.name}</p>
                <Link className="adminpage--reports--toolinfo" to={`/tool/${report.tool._id}`}>See tool</Link>
                <p>{report.information}</p>
                <p>{report.image}</p>
                <button onClick={(e) => handleDeleteReport(e, report._id)}>Resolve</button>
              </div>
              </>
              );
            })}
            </div>
          </div>
       
          <div className="adminpage--add-tools">
            <h3>Add new tool</h3>
            <form
              className="adminpage--add-tools-form"
              onSubmit={handleToolSubmit}
            >
              <label htmlfor="toolname">Tool name:</label>
              <input
                type="text"
                id="toolname"
                name="toolname"
                placeholder="Tool name..."
                value={toolinputs.toolname || ""}
                onChange={handleChange}
              />
              <label htmlfor="information">Information:</label>
              <textarea
                id="information"
                name="information"
                placeholder="Information..."
                value={toolinputs.information || ""}
                onChange={handleChange}
              />
              <label htmlfor="quantity">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location..."
                value={toolinputs.location || ""}
                onChange={handleChange}
              />
              <label htmlfor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Quantity..."
                value={toolinputs.quantity || ""}
                onChange={handleChange}
              />
              <label htmlfor="requiredcourses">Required courses:</label>
              <input
                type="text"
                id="requiredcourses"
                name="requiredcourses"
                placeholder="Course(s) separated with comma , "
                value={toolinputs.requiredcourses || ""}
                onChange={handleChange}
              />
              <label htmlfor="requiredcourses">image:</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Image url..."
                value={toolinputs.image || ""}
                onChange={handleChange}
              />
              <button type="submit" name="submit" id="submit">
                Add new tool
              </button>
            </form>
          </div>
        </div>
        <div className="adminpage--user">
          <h2 className="adminpage--header">User management</h2>
          <div className="adminpage--users">
            {users.map((user) => {
              return <User variant="card" data={user} key={user._id} />;
            })}
          </div>
          <div className="adminpage--add-users">
            <h3>Add new user</h3>
            <form
              className="adminpage--add-users-form"
              onSubmit={handleUserSubmit}
            >
              <label htmlfor="firstname">First name:</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name..."
                value={userinputs.firstname || ""}
                onChange={handleUserChange}
              />
              <label htmlfor="surname">Last name:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Last name..."
                value={userinputs.surname || ""}
                onChange={handleUserChange}
              />
              <label htmlfor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail..."
                value={userinputs.email || ""}
                onChange={handleUserChange}
              />
              <label htmlfor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password..."
                value={userinputs.password || ""}
                onChange={handleUserChange}
              />
              <label htmlfor="approvedcourses">Approved courses:</label>
              <input
                type="text"
                id="approvedcourses"
                name="approvedcourses"
                placeholder="Course(s) separated with comma , "
                value={userinputs.approvedcourses || ""}
                onChange={handleUserChange}
              />
              <button type="submit" id="usersubmit" name="usersubmit">
                Submit
              </button>
            </form>
          </div>
        </div>

      </section>
    </>
  );
}

export default Adminpage;
